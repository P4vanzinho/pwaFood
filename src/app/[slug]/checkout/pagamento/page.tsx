'use client'

import { getPublicUser } from '@/utils/cookiePublicUser'
import { Container, PaymentData, Total, ChangeLink } from './styles'
import Title from '@/app/components/Title'
import Button from '@/app/components/Button'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { inter, poppins } from '@/app/fonts'
import { useBagContext } from '@/context/bag'
import { centsToUnities } from '@/utils/money'
import useFoodFetch from '@/app/hooks/useFoodFetch'
import { FoodApiDeliveryFee, FoodApiOrder } from '../../../../../types/foodApi'
import { useOrderContext } from '@/context/order'
import { isMobile } from 'react-device-detect'

type CheckoutProps = {
  params: {
    slug: string
  }
}

export default function Checkout({ params }: CheckoutProps) {
  const user = getPublicUser()
  const { request: orderRequest, data: order } = useFoodFetch<FoodApiOrder>()
  const { currentOrder, setCurrentOrder } = useOrderContext()

  useEffect(() => {
    console.log(order?.id)
    console.log(order?.business?.whatsapp)
    console.log(order?.business?.whatsapp)

    if (!order?.raw?.whatsapp || !order.business.whatsapp) {
      return
    }

    const phoneNumber = order.business.whatsapp
    const message = order.raw.whatsapp

    let url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURI(message)}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURI(
          message,
        )}`

    if (!isMobile) {
      url += `&app_absent=0`
    }

    window.open(url)
  }, [order])

  useEffect(() => {
    if (!order) return

    setCurrentOrder((currentOrder) => ({
      ...currentOrder,
      business: {
        name: order?.business?.name,
        whatsapp: order?.business?.whatsapp,
      },
    }))
  }, [order, setCurrentOrder])

  const sendOrderOnClick = () => {
    if (!currentOrder) {
      return
    }

    const { total, deliveryFee, businessId, business, ...body } = currentOrder

    orderRequest({
      endPoint: `${businessId}/order`,
      body,
      method: 'POST',
    })
  }

  const paymentMethodsText: Record<string, string> = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    pix: 'PIX',
  }

  const cardBrandText: Record<string, string> = {
    master: 'Mastercard',
    visa: 'VISA',
    elo: 'Elo',
  }

  const showCardBrand =
    user?.preferences?.payment?.method === 'credit' ||
    user?.preferences?.payment?.method === 'debit'

  const showSendOrderButton = !!currentOrder?.total

  return (
    <Container>
      <div className={poppins.className}>
        <Title>Pagamento</Title>

        <PaymentData>
          <div>
            <label className={poppins.className}>Método de pagamento</label>

            <ChangeLink
              className={poppins.className}
              href={`/${params?.slug}/checkout/pagamento/alterar`}
            >
              alterar
            </ChangeLink>
          </div>
          <section>
            <p>
              {!!user?.preferences?.payment?.method &&
                paymentMethodsText[user?.preferences?.payment?.method]}
            </p>
            <p>Trazer maquininha de cartão</p>
            {!!showCardBrand && (
              <p>
                {user?.preferences?.payment?.cardBrand &&
                  cardBrandText[user?.preferences?.payment?.cardBrand]}
              </p>
            )}
          </section>
        </PaymentData>
      </div>
      <footer>
        <Total className={inter.className}>
          <label>Total</label>
          <div>
            {!!currentOrder?.deliveryFee && (
              <caption>
                entrega +{centsToUnities(currentOrder?.deliveryFee)}
              </caption>
            )}
            <span>{centsToUnities(currentOrder?.total ?? 0)}</span>
          </div>
        </Total>
        <Button
          disabled={!showSendOrderButton}
          text="Enviar pedido"
          onClick={sendOrderOnClick}
        />
      </footer>
    </Container>
  )
}
