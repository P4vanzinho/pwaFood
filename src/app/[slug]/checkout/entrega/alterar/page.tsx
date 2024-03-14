'use client'

import { Container } from './styles'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { getPublicUser, setPublicUser } from '@/utils/cookiePublicUser'
import { SyntheticEvent, useEffect, useState } from 'react'
import { bebasNeue } from '@/app/fonts'
import { useRouter } from 'next/navigation'
import Title from '@/app/components/Title'
import useFoodFetch from '@/app/hooks/useFoodFetch'
import { EndpointFoodApiEnum } from '@/app/enums'
import { FoodApiAddressGettingByPostalCode } from '../../../../../../types/foodApi'

type PersonalDataProps = {
  params: {
    slug: string
  }
}

type DataDelivery = FoodApiAddressGettingByPostalCode & {
  name: string
  whatsapp: string
  streetNumber: string
  addressDetails?: string
}

export default function PersonalData({ params }: PersonalDataProps) {
  const user = getPublicUser()
  let dataDeliveryInitial: DataDelivery = {} as DataDelivery

  if (user) {
    dataDeliveryInitial = {
      ...user.address,
      name: user.name ?? '',
      whatsapp: user.whatsapp ?? '',
    } as DataDelivery
  }

  const router = useRouter()
  const { data: address, request } =
    useFoodFetch<FoodApiAddressGettingByPostalCode>()
  const [dataDelivery, setDataDelivery] = useState(dataDeliveryInitial)

  const inputOnChange = (inputId: string, currentValue: string) => {
    if (inputId === 'cep' && currentValue.length === 9) {
      request({
        endPoint: `${EndpointFoodApiEnum.ADDRESS}/${currentValue}`,
        method: 'GET',
      })
    }

    setDataDelivery((dataDelivery) => ({
      ...dataDelivery,
      [inputId]: currentValue,
    }))
  }

  useEffect(() => {
    if (!address) {
      return
    }

    setDataDelivery((dataDelivery) => ({
      ...dataDelivery,
      ...address,
    }))
  }, [address])

  const inputs = [
    {
      placeHolder: 'Digite o seu nome',
      id: 'name',
      label: 'nome',
      type: 'text',
      value: dataDelivery.name,
      required: true,
    },
    {
      placeHolder: 'Digite o número do seu WhatsApp',
      id: 'whatsapp',
      label: 'whatsapp',
      type: 'cellphone',
      value: dataDelivery.whatsapp,
      required: true,
    },
    {
      placeHolder: 'Digite o CEP do endereço de entrega',
      id: 'cep',
      label: 'CEP',
      type: 'cep',
      value: dataDelivery.cep,
      required: true,
    },
    {
      placeHolder: 'Digite o endereço',
      id: 'street',
      label: 'Endereço',
      type: 'text',
      value: dataDelivery.street,
      required: true,
    },
    {
      placeHolder: 'Digite o número do endereço',
      label: 'Número',
      id: 'streetNumber',
      type: 'text',
      value: dataDelivery.streetNumber,
      required: true,
    },
    {
      placeHolder: 'Digite o bairro',
      label: 'Bairro',
      id: 'neighborhood',
      type: 'text',
      value: dataDelivery.neighborhood,
      required: true,
    },

    {
      placeHolder: 'Ex: Apartamento 302',
      label: 'Complemento',
      id: 'addressDetails',
      type: 'text',
      value: dataDelivery.addressDetails,
      required: false,
    },
    {
      placeHolder: 'Cidade',
      id: 'city',
      label: 'Digite a cidade',
      value: dataDelivery.city,
      required: true,
      type: 'text',
    },
  ]

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    if (!Object.keys(dataDelivery).length) {
      return
    }

    const {
      cep,
      city,
      name,
      neighborhood,
      state,
      street,
      streetNumber,
      whatsapp,
      addressDetails,
    } = dataDelivery

    setPublicUser({
      whatsapp,
      name,
      address: {
        cep,
        street,
        streetNumber,
        neighborhood,
        addressDetails,
        city,
        state,
      },
    })

    router.push(`/${params?.slug}/checkout/entrega`)
  }

  return (
    <Container>
      <Title>Dados de entrega</Title>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input
            key={input.label}
            id={input.label}
            label={input.label}
            placeholder={input.placeHolder}
            type={input.type}
            onChange={(e) => inputOnChange(input.id, e.currentTarget.value)}
            required={input.required}
            value={input.value}
          />
        ))}
        <Button
          className={bebasNeue.className}
          type="submit"
          text="ADICIONAR ENDEREÇO"
        />
      </form>
    </Container>
  )
}
