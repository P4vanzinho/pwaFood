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
  preferences?: {
    payment?: {
      method?: string;
      cardBrand?: string;
    };
    delivery?: {
      method?: 'pickup' | 'delivery';
    };
  };
};

const key = 'u';

function getPublicUser(): PublicUser | null {
  const stringObject = getCookie(key);

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

function setPublicUser({ name, address, whatsapp, preferences }: PublicUser) {
  const current = getPublicUser();

  setCookie(
    key,
    JSON.stringify({
      name: name ?? current?.name,
      address: address ?? current?.address,
      whatsapp: whatsapp ?? current?.whatsapp,
      preferences: preferences ?? current?.preferences,
    }),
  );
}

export { getPublicUser, setPublicUserByToken, setPublicUser };
