'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation';

import { useContext } from 'react';

import { Container } from "./style";
import AuthHeader from "@/app/components/AuthHeader";

export default function Login() {

    return (
        <Container>
            <AuthHeader />
            <h1>oi</h1>
        </Container>

    )
}