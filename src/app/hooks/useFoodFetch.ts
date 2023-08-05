import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { FoodFetchProps, foodFetch } from '../services/foodFetch/foodFetch';
import { EndpointFoodApiEnum } from '../enums';

function useFoodFetch(
  endPoint?: EndpointFoodApiEnum,
  query?: Record<string, any>,
) {
  const { data: session } = useSession();
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [queryBuilder, setQueryBuilder] = useState(query);

  useEffect(() => {
    async function fetch() {
      setLoading(true);

      console.log('fez fetch');

      const response = await foodFetch({
        token: session?.data?.token,
        endPoint: endPoint as EndpointFoodApiEnum,
        params: queryBuilder,
      });

      setData(response?.data);
      setError(response?.error);
      setMessage(response?.message);
      setLoading(false);
    }

    if (!session || !endPoint) {
      return;
    }

    fetch();
  }, [session, endPoint, fetchParams]);

  const request = useCallback(
    ({ endPoint, body, method }: FoodFetchProps) => {
      console.log(`endPoint`, endPoint);

      setLoading(true);

      async function fetch() {
        setLoading(true);

        const response = await foodFetch({
          token: session?.data?.token,
          endPoint,
          method,
          body,
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
