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
import React, { useState, SyntheticEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { toast } from 'react-toastify';

export default function Login() {
  const router = useRouter();

  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notSeePassword, setNotSeePassword] = useState(true);
  const [matchPasswordError, setMatchPasswordError] = useState<string>('');

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

  function handleShowPassword() {
    setNotSeePassword(!notSeePassword);
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
              <div>
                <input
                  id="password"
                  type={notSeePassword ? 'password' : 'text'}
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  minLength={1}
                />

                <button onClick={handleShowPassword} type="button">
                  {notSeePassword ? (
                    <AiFillEye name="eye" size={20} />
                  ) : (
                    <AiFillEyeInvisible name="invisibleEye" size={20} />
                  )}
                </button>
              </div>
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
