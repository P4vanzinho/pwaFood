import { FoodApiProduct } from '../../../../types/foodApi'
import Text from '../Text'
import Price from '../Price'

import { usePathname, useRouter } from 'next/navigation'
import { Container, PhotoFood } from './styles'

type ProductCardProps = {
  data: FoodApiProduct
  mode: 'private' | 'public'
}

export default function ProductCard({ data, mode }: ProductCardProps) {
  const pathname = usePathname()
  const router = useRouter()

  const cardOnClick = () => {
    const path =
      mode === 'public'
        ? `${pathname}/item/${data.slug}`
        : `/painel-administrativo/produto/${data.slug}`

    router.push(path)
  }

  return (
    <Container onClick={cardOnClick}>
      {!!data.upload?.url && (
        <PhotoFood
          src={data.upload.url}
          height={130}
          width={130}
          alt={data.name}
        />
      )}

      <div>
        <Text>{data.name}</Text>
        <Price>{data.price ?? 'sob consulta'}</Price>
      </div>
    </Container>
  )
}
