'use client';

import QRCode from 'react-qr-code';
import { Wrapper, Container } from './styles';
import { socketIo } from '@/socket/io';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

type WhatsappStatus = {
  qrCode: string;
  isConnected: boolean;
  timeout: number;
};

export default function Products() {
  const { data: session } = useSession();

  const [whatsappStatus, setWhatsappStatus] = useState<
    WhatsappStatus | undefined
  >();

  const [loadingWhatsappStatus, setLoadingWhatsappStatus] =
    useState<boolean>(false);

  const [whatsappTimeout, setWhatsappTimeout] = useState<number | null>(null);
  const [qrCodeExpired, setQrCodeExpired] = useState<boolean | null>(null);

  const getWhatsappStatus = () => {
    setLoadingWhatsappStatus(true);

    socketIo.emit('status', function (status: WhatsappStatus) {
      setLoadingWhatsappStatus(false);

      if (status) {
        setWhatsappTimeout(status.timeout ?? 30);
        setQrCodeExpired(false);
        setWhatsappStatus(status);
      }
    });

    socketIo.on('whatsapp-connected', (jid: string) => {
      setWhatsappStatus({
        isConnected: true,
        qrCode: '',
        timeout: 0,
      });
    });
  };

  useEffect(() => {
    getWhatsappStatus();
  }, []);

  useEffect(() => {
    if (!whatsappTimeout) {
      return;
    }

    const interval = setInterval(() => {
      setWhatsappTimeout(current => {
        if (current === 1) {
          setQrCodeExpired(true);
        }

        return current && current > 0 ? current - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [whatsappTimeout]);

  return (
    <Wrapper>
      <Container>
        {loadingWhatsappStatus && <h1>loading</h1>}

        {whatsappStatus?.qrCode && !loadingWhatsappStatus && (
          <>
            <h2>Configuração do bot do Whatsapp</h2>
            <ol>
              <li>Abra o Whatsapp no celular da sua loja</li>
              <li>Clique no e depois em &quot;configuraçoes&quot;</li>
              <li>Clique no ícone do qrcode</li>
              <li>Acesse a aba &quot;Escanear código&quot;</li>
              <li>Aponte a câmera do celular para o qrcpde abaixo</li>
              <div>
                <QRCode value={whatsappStatus?.qrCode} />

                {qrCodeExpired && <span>Qr code expirado</span>}
              </div>
              {!!whatsappTimeout && <span>{whatsappTimeout}</span>}
              <span>
                {qrCodeExpired && (
                  <button onClick={getWhatsappStatus}>
                    Gerar novo QR code
                  </button>
                )}
              </span>
            </ol>
          </>
        )}

        {whatsappStatus?.isConnected && <h1>Whatsapp conectado.</h1>}
      </Container>
    </Wrapper>
  );
}
