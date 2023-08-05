import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { FoodFetchProps, foodFetch } from '../services/foodFetch/foodFetch';
import { EndpointFoodApiEnum } from '../enums';

function useFoodFetch(
  endPoint?: EndpointFoodApiEnum,
  params?: Record<string, any>,
) {
  const { data: session } = useSession();
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      setLoading(true);

      const response = await foodFetch({
        token: session?.data?.token,
        endPoint: endPoint as EndpointFoodApiEnum,
        params,
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
  }, [session, endPoint]);

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

  return { data, error, message, loading, request };
}

export default useFoodFetch;
