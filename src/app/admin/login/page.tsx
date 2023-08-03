'use client';

import {
  Container,
  Main,
  FieldsetLogin,
  ForgetPasswordContainer,
} from './styles';

import AuthHeader from '../../components/AuthHeader';
import GoogleSignInButton from '@/app/components/GoogleSignInButton';

import { poppins, inter, bebas_neue } from '@/app/fonts';
import Link from 'next/link';
import React, {
  useState,
  ChangeEvent,
  SyntheticEvent,
  useContext,
} from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast, cssTransition } from 'react-toastify';

export default function Login() {
  const { data: session } = useSession();

  const router = useRouter();

  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        toast.error(result?.error, {
          theme: 'colored',
        });
      } else {
        toast.success('Parabéns !');
        router.replace('/admin/dashboard');
      }
    } catch (error) {
      return;
    }
  }

  return (
    <Container>
      <AuthHeader />
      <Main>
        <form onSubmit={handleSubmit}>
          <GoogleSignInButton />

          <div>
            <div></div>
            <span className={poppins.className}>ou</span>
            <div></div>
          </div>

          <FieldsetLogin>
            <label htmlFor="email">
              EMAIL
              <input
                id="email"
                type="email"
                placeholder="thiago@gmail.com"
                onChange={e => setEmail(e.target.value)}
                value={email}
                minLength={1}
              />
              {!email && <span>Insira seu email !!</span>}
            </label>

            <label htmlFor="password" className={bebas_neue.className}>
              SENHA
              <input
                id="password"
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
              {!password && <span>Insira sua senha !!</span>}
            </label>

            <button type="submit">
              <span className={bebas_neue.className}>ENTRAR</span>
            </button>
          </FieldsetLogin>

          <ForgetPasswordContainer className={inter.className}>
            <span>Esqueceu sua senha</span>
            <Link href="">Clique aqui </Link>
          </ForgetPasswordContainer>
        </form>
      </Main>
    </Container>
  );
}
