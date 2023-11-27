import { EndpointFoodApiEnum } from '@/app/enums';
import { foodApiConfig } from '@/config';
import { toast } from 'react-toastify';

export type FoodFetchProps = {
  body?: unknown;
  headers?: Record<string, string>;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'UPDATE';
  endPoint: EndpointFoodApiEnum | string;
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

  let headersToFetch: any = {
    'Content-type': 'application/json',

    ...headers,
  };

  if (token) {
    headersToFetch = {
      ...headersToFetch,
      Authorization: `Bearer ${token}` ?? undefined,
    };
  }

  if (isFormData) {
    delete headersToFetch['Content-type'];
  }

  const bodyToFetch = isFormData ? body : JSON.stringify(body);

  const response = await fetch(
    `${foodApiConfig.url}/${endPoint}${fetchParams ? fetchParams : ''}`,
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
