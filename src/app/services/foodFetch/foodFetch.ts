import { EndpointFoodApiEnum } from '@/app/enums';
import { toast } from 'react-toastify';

export type FoodFetchProps = {
  body?: unknown;
  headers?: Record<string, string>;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'UPDATE';
  endPoint: EndpointFoodApiEnum;
  token?: string;
  params?: Record<string, any>;
};

type FetchResponse<T> = {
  data?: T;
  error?: string;
  message?: string;
};

export async function foodFetch<T = any>({
  body,
  method,
  endPoint,
  token,
  params,
}: FoodFetchProps): Promise<null | FetchResponse<T>> {
  console.log('foodFetch');

  let fetchParams;

  if (params) {
    fetchParams = `?${new URLSearchParams(params).toString()}`;
  }

  console.log(fetchParams);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_API}/${endPoint}${
      fetchParams ? fetchParams : ''
    }`,
    {
      method: method ?? 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}` ?? undefined,
      },
      body: JSON.stringify(body),
    },
  );

  const responseBody = await response.json();

  if (responseBody.error) {
    toast.error(responseBody.error, { draggable: false });
    return null;
  }

  toast.success(responseBody.message);
  return responseBody;
}
