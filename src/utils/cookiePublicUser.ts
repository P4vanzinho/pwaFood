import { getCookie, setCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';

type PublicUser = {
  name?: string;
  whatsapp?: string;
  address?: {};
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

export { getPublicUser, setPublicUserByToken };
