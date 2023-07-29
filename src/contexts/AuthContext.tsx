import { createContext, ReactNode } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: ({ email, password }: LoginData) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode; // Defina o tipo de dados como ReactNode
};

type LoginData = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export async function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function login({ email, password }: LoginData) {
    const response = await fetch(
      'https://goldfish-app-vg4r3.ondigitalocean.app/tenant/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    );

    console.log(response);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
}
