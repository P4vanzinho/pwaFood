import { EndpointFoodApiEnum } from '@/app/enums'
import useFoodFetch from '@/app/hooks/useFoodFetch'
import { useSession } from 'next-auth/react'

interface Category {
  id: number
  name: string
  businessId: number
  uploadId: number
}

export default function SelectCategoryOptions({
  businessId,
}: {
  businessId: number
}) {
  const data = useSession()

  const { data: categories } = useFoodFetch(
    EndpointFoodApiEnum.PRODUCT_CATEGORY,
    {
      injectProducts: true,
      businessId,
    },
  ) as { data: Category[] }

  return (
    <>
      {categories?.map((category) => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </>
  )
}
