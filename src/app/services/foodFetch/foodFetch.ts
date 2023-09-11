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
  headers = {},
}: FoodFetchProps): Promise<null | FetchResponse<T>> {
  let fetchParams;

  if (params) {
    fetchParams = `?${new URLSearchParams(params).toString()}`;
  }

  const isFormData = headers['Content-type'] === 'multipart/form-data';

  const headersToFetch = {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}` ?? undefined,
    ...headers,
  };

  if (isFormData) {
    //@ts-expect-error
    delete headersToFetch['Content-type'];
  }

  const bodyToFetch = isFormData ? body : JSON.stringify(body);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_API}/${endPoint}${
      fetchParams ? fetchParams : ''
    }`,
    {
      method: method ?? 'GET',
      headers: headersToFetch,
      body: bodyToFetch as XMLHttpRequestBodyInit,
    },
  );

  if (response.status === 401) {
    return { error: 'Unauthorized' };
  }

  const responseBody = await response.json();

  if (responseBody.error) {
    toast.error(responseBody.error, { draggable: false });

    return responseBody.error;
  }

  toast.success(responseBody.message);
  return responseBody;
}
