'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { AppRoutes } from "../../routes/AppRoutes";

import { useContext } from 'react';
import { AuthContext } from "@/contexts/users/AuthContext";

import { Container } from "./style";
import AuthHeader from "@/app/components/AuthHeader";

export default function Login() {
    const { signIn } = useContext(AuthContext)
    // na prática, estamos confirmando se o token é de adm ou de cliente.


    return (
        <Container>
           <AuthHeader/>

          <h1>oi</h1>
               


        </Container>

    )
}