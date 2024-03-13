'use client'

import QRCode from 'react-qr-code'
import { Wrapper, Container } from './styles'
import { socketIo } from '@/socket/io'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { foodApiConfig } from '@/config'

type WhatsappStatus = {
  qrCode: string
  isConnected: boolean
  timeout: number
}

export default function Products() {
  const { data: session } = useSession()

  const business = session?.data?.business?.length
    ? session?.data?.business[0]
    : null

  const token = session?.data?.token

  const [whatsappStatus, setWhatsappStatus] = useState<
    WhatsappStatus | undefined
  >()

  const [loadingWhatsappStatus, setLoadingWhatsappStatus] =
    useState<boolean>(false)

  const [whatsappTimeout, setWhatsappTimeout] = useState<number | null>(null)
  const [qrCodeExpired, setQrCodeExpired] = useState<boolean | null>(null)
  const [showDownloadWaResponser, setShowDownloadWaResponser] = useState(false)

  const getWhatsappStatus = () => {
    setLoadingWhatsappStatus(true)

    socketIo.emit('status', function (status: WhatsappStatus) {
      setLoadingWhatsappStatus(false)

      if (status) {
        setWhatsappTimeout(status.timeout ?? 30)
        setQrCodeExpired(false)
        setWhatsappStatus(status)
      }
    })

    socketIo.on('whatsapp-connected', (jid: string) => {
      setWhatsappStatus({
        isConnected: true,
        qrCode: '',
        timeout: 0,
      })
    })
  }

  useEffect(() => {
    if (!whatsappStatus?.isConnected || !business || !token) {
      return
    }

    const waAutoResponderConfig = {
      api: {
        token,
        refreshToken: '',
        url: {
          value: `${foodApiConfig.url}/business/${business?.id}/response`,
          verb: 'GET',
        },
      },
    }

    socketIo.emit(
      'send-wa-auto-responder-config',
      JSON.stringify(waAutoResponderConfig),
    )
  }, [whatsappStatus, business, token])

  useEffect(() => {
    getWhatsappStatus()
  }, [])

  useEffect(() => {
    socketIo.on('connect_error', () => {
      setShowDownloadWaResponser(true)
      setLoadingWhatsappStatus(false)
      setWhatsappStatus({
        isConnected: false,
        qrCode: '',
        timeout: 0,
      })
    })
  }, [])

  useEffect(() => {
    if (whatsappStatus?.isConnected) {
      setShowDownloadWaResponser(false)
    }
  }, [whatsappStatus])

  useEffect(() => {
    if (!whatsappTimeout) {
      return
    }

    const interval = setInterval(() => {
      setWhatsappTimeout((current) => {
        if (current === 1) {
          setQrCodeExpired(true)
        }

        return current && current > 0 ? current - 1 : 0
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [whatsappTimeout])

  return (
    <Wrapper>
      <Container>
        {showDownloadWaResponser && (
          <div>
            <h2>
              Para o funcionamento do whatsapp auto responder, é preciso baixar
              e instalar um aplicativo em seu computador. Clique Aqui para
              baixá-lo.
            </h2>
            <button>Baixar Aplicativo</button>
          </div>
        )}

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

        {whatsappStatus?.isConnected && (
          <h1>Whatsapp auto responder conectado.</h1>
        )}
      </Container>
    </Wrapper>
  )
}
