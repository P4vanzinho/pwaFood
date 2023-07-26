'use client';

import { SignInForm, Container, Main } from './styles';

import AuthForm from '../../components/authForm';
import AuthHeader from '../../components/AuthHeader';

import Image from 'next/image';
import { poppins, inter, bebas_neue } from '@/app/fonts';
import Link from 'next/link';

//Estou considerando que esta page.tsx é a do administrador.
export default function Login() {
  return (
    <Container>
      <AuthHeader />
      <Main>
        <AuthForm />
      </Main>
    </Container>
  );
}
