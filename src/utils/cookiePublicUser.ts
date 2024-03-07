import { getCookie, setCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';

type PublicUser = {
  name?: string;
  whatsapp?: string;
  address?: {
    cep: string;
    street: string;
    streetNumber: string;
    neighborhood: string;
    addressDetails?: string;
    city: string;
    state: string;
  };
};

const key = 'u';

function getPublicUser(): PublicUser | null {
  const stringObject = getCookie(key);

  console.log(stringObject);

  if (!stringObject) {
    return null;
  }

  return JSON.parse(stringObject);
}

function setPublicUserByToken(token: string): void {
  const decoded = jwtDecode(token);

  if (decoded) {
    setCookie(key, decoded);
  }
}

function setPublicUser({ name, address, whatsapp }: PublicUser) {
  setCookie(
    key,
    JSON.stringify({
      name,
      address,
      whatsapp,
    }),
  );
}

export { getPublicUser, setPublicUserByToken, setPublicUser };
