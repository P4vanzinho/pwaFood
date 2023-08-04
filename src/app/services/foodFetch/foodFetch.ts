import { toast } from 'react-toastify';

type FoodFetchProps<T> = {
  body: unknown;
  headers?: Record<string, string>;
  method?: string;
  endPoint: string;
};

export async function foodFetch<T>({
  body,
  headers,
  method,
  endPoint,
}: FoodFetchProps<T>): Promise<null | T> {
  console.log(process.env.NEXT_PUBLIC_BASE_URL_API);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_API}/${endPoint}`,
    {
      method: method ?? 'GET',
      headers: headers ?? {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );

  const responseBody = await response.json();
  console.log(responseBody);

  if (responseBody.error) {
    toast.error(responseBody.error, { draggable: false });
    return null;
  }

  toast.success(responseBody.message);
  return responseBody as T;
}
