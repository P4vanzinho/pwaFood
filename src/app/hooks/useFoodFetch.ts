import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { FoodFetchProps, foodFetch } from '../services/foodFetch/foodFetch';
import { EndpointFoodApiEnum } from '../enums';
import { useRouter } from 'next/navigation';

interface Upload {
  id: number;
}

function useFoodFetch(
  endPoint?: EndpointFoodApiEnum,
  query?: Record<string, any>,
  shouldUseToken?: boolean,
) {
  const { data: session } = useSession();
  const [data, setData] = useState<Upload | never[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [queryBuilder, setQueryBuilder] = useState(query);
  const router = useRouter();

  useEffect(() => {
    async function fetch() {
      setLoading(true);

      let fetchParams: FoodFetchProps = {
        endPoint: endPoint as EndpointFoodApiEnum,
        params: queryBuilder,
      };

      if (
        shouldUseToken === undefined ||
        (typeof shouldUseToken == 'boolean' && shouldUseToken)
      ) {
        fetchParams = {
          ...fetchParams,
          token: session?.data?.token,
        };
      }

      const response = await foodFetch(fetchParams);

      setData(response?.data);
      setError(response?.error);
      setMessage(response?.message);
      setLoading(false);

      if (response?.error === 'Unauthorized') {
        router.push('/admin/login');
      }
    }

    if (!session || !endPoint) {
      return;
    }

    fetch();
  }, [session, endPoint, queryBuilder, router, shouldUseToken]);

  const request = useCallback(
    ({ endPoint, body, method, headers }: FoodFetchProps) => {
      setLoading(true);

      async function fetch() {
        setLoading(true);

        const response = await foodFetch({
          token: session?.data?.token,
          endPoint,
          method,
          body,
          headers,
        });

        setData(response?.data);
        setError(response?.error);
        setMessage(response?.message);
        setLoading(false);
      }

      if (!session) {
        return;
      }

      fetch();
    },
    [session],
  );

  return { data, error, message, loading, request, setQueryBuilder };
}

export default useFoodFetch;
