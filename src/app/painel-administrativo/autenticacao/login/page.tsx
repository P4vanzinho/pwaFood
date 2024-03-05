'use client';

import {
  Container,
  Or,
  FieldsetLogin,
  ForgetPasswordContainer,
} from './styles';

import GoogleSignInButton from '@/app/components/GoogleSignInButton';

import { poppins, inter, bebas_neue } from '@/app/fonts';
import Link from 'next/link';
import React, { useState, SyntheticEvent, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Button from '@/app/components/Button';
import { RoutesEnum } from '@/app/enums';
import Input from '@/app/components/Input';

export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    setLoading(true);

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

        setLoading(false);
      } else {
        toast.success('Bem-vindo!');
        router.replace(RoutesEnum.PRODUTOS);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      return;
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <GoogleSignInButton />

        <Or>
          <div></div>
          <span className={poppins.className}>ou</span>
          <div></div>
        </Or>

        <FieldsetLogin>
          <Input
            label="E-MAIL"
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />

          <Input
            label="SENHA"
            id="password"
            placeholder="Digite sua senha"
            type={'password'}
            onChange={e => setPassword(e.target.value)}
            value={password}
          />

          <Button
            className={bebas_neue.className}
            type="submit"
            text="ENTRAR"
            loading={loading}
          />
        </FieldsetLogin>

        <ForgetPasswordContainer className={inter.className}>
          <span>
            Esqueceu sua senha<Link href="">Clique aqui </Link>
          </span>
        </ForgetPasswordContainer>
      </form>
    </Container>
  );
}
