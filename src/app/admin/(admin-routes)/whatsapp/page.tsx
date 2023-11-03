'use client';

import QRCode from 'react-qr-code';
import { Wrapper, Container } from './styles';
import { socketIo } from '@/socket/io';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

type WhatsappStatus = {
  qrCode: string;
  isConnected: boolean;
};

export default function Products() {
  const { data: session } = useSession();
  const businessId = session?.data.business[0].id;

  const [whatsappStatus, setWhatsappStatus] = useState<
    WhatsappStatus | undefined
  >();

  const [loadingWhatsappStatus, setLoadingWhatsappStatus] =
    useState<boolean>(false);

  const [whatsappTimeout, setWhatsappTimeout] = useState<number | undefined>();
  const [qrCodeExpired, setQrCodeExpired] = useState(true);

  const getWhatsappStatus = () => {
    setLoadingWhatsappStatus(true);

    socketIo.emit('status', function (status: any) {
      setLoadingWhatsappStatus(false);

      if (status) {
        setWhatsappTimeout(50);
        setQrCodeExpired(false);
        setWhatsappStatus(status);
      }
    });

    socketIo.on('whatsapp-connected', () => {
      setWhatsappStatus({
        isConnected: true,
        qrCode: '',
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
              </div>
              {!!whatsappTimeout && <span>{whatsappTimeout}</span>}
              <span>
                {qrCodeExpired && (
                  <button onClick={getWhatsappStatus}>Get QR code</button>
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
