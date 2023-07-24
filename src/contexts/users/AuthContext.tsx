import { createContext } from 'react';
import { ReactNode } from "react";
import { setCookie } from 'nookies'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppRoutes } from '../../app/routes/AppRoutes';

type User = {
    token: string;
}
type SignInData = {
    email: string;
    password: string
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<void>
}


export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {

    const { push } = useRouter()
    const isAuthenticated = true;

    const [user, setUser] = useState<User | null>(null)

    // const getData = async () => {
    //     const data = await fetch('https://jsonplaceholder.typicode.com/token');
    //     return (await data.json()) as { token: string }
    // }

    async function signIn({ email, password }: SignInData) {
        const isAdmin = true;
        let data;
        // const userToken = await getData();

        // na pratica, isso é a resposta de uma requisição para o backend, que devolce o token
        const response = {
            data: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImJ1c2luZXNzIjpbXSwiZW1haWwiOiJwYXZhbmRhc2lsdmFAaG90bWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIzLTA3LTIxVDIyOjEwOjQ2LjA3MVoiLCJpZCI6MywibmFtZSI6InJvZ2VyaW8iLCJ1cGRhdGVkQXQiOiIyMDIzLTA3LTIxVDIyOjEwOjQ2LjA3MFoifSwiaWF0IjoxNjg5OTc5Mjg2LCJleHAiOjE2ODk5ODI4ODZ9.uvQTeK1WscGc8_nJyavyXRwOttJVm0dW1Ky6J9MGlnI"
            }
        }

        const { token } = response.data

        setCookie(undefined, 'PwaFoodtoken', token,
            {
                maxAge: 60 * 60 * 1, //1 hora,
            })

        if (token) {
            if (isAdmin) {
                push(AppRoutes.private.admin)
            } else {
                push(AppRoutes.private.clientePWA)
            }
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}