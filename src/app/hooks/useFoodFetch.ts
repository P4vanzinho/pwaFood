import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSession } from 'next-auth/react'
import { FoodFetchProps, foodFetch } from '../services/foodFetch/foodFetch'
import { EndpointFoodApiEnum } from '../enums'
import { useRouter } from 'next/navigation'
import { useLoadingContext } from '@/context/loading'

function useFoodFetch<T>(
  endPoint?: string,
  query?: Record<string, any>,
  shouldUseToken?: boolean,
) {
  const { data: session } = useSession()
  const [data, setData] = useState<T>()
  const [error, setError] = useState<string | undefined>()
  const [message, setMessage] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)
  const [queryBuilder, setQueryBuilder] = useState(query)
  const router = useRouter()
  const { setLoading: setContextLoading } = useLoadingContext()

  useEffect(() => {
    setContextLoading(loading)
  }, [loading, setContextLoading])

  useEffect(() => {
    async function fetch() {
      setLoading(true)

      let fetchParams: FoodFetchProps = {
        endPoint: endPoint as EndpointFoodApiEnum,
        params: queryBuilder,
      }

      if (
        shouldUseToken === undefined ||
        (typeof shouldUseToken === 'boolean' && shouldUseToken)
      ) {
        fetchParams = {
          ...fetchParams,
          token: session?.data?.token,
        }
      }

      const response = await foodFetch(fetchParams)

      setData(response?.data)
      setError(response?.error)
      setMessage(response?.message)
      setLoading(false)

      if (response?.error === 'Unauthorized') {
        router.push('/admin/login')
      }
    }

    if (!endPoint) {
      setError('Endpoint undefined')
      return
    }

    if (!!shouldUseToken && !session) {
      setError('Session not found')
      return
    }

    fetch()
  }, [session, endPoint, queryBuilder, router, shouldUseToken])

  const request = useCallback(
    ({ endPoint, body, method, headers, params }: FoodFetchProps) => {
      setLoading(true)

      async function fetch() {
        setLoading(true)

        let fetchParams: FoodFetchProps = {
          endPoint,
          method,
          body,
          headers,
          params,
        }

        if (
          shouldUseToken === undefined ||
          (typeof shouldUseToken === 'boolean' && shouldUseToken)
        ) {
          fetchParams = {
            ...fetchParams,
            token: session?.data?.token,
          }
        }

        const response = await foodFetch(fetchParams)

        setData(response?.data)
        setError(response?.error)
        setMessage(response?.message)
        setLoading(false)
      }

      if (shouldUseToken && !session) {
        return
      }

      fetch()
    },
    [session, shouldUseToken],
  )

  return { data, error, message, loading, request, setQueryBuilder }
}

export default useFoodFetch
