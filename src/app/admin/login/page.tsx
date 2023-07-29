'use client';

import {
  LoginForm,
  Container,
  Main,
  FieldsetLogin,
  ForgetPasswordContainer,
} from './styles';

import AuthForm from '../../components/AuthLoginForm';
import AuthHeader from '../../components/AuthHeader';

import Image from 'next/image';
import { poppins, inter, bebas_neue } from '@/app/fonts';
import Link from 'next/link';
import { useState, ChangeEvent } from 'react';

//Estou considerando que esta page.tsx é a do administrador.
export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState<string>('');

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <Container>
      <AuthHeader />
      <Main>
        <LoginForm>
          <div className={inter.className}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_125_836)">
                <path
                  d="M23.766 12.2765C23.766 11.4608 23.6999 10.6406 23.5588 9.83813H12.24V14.4591H18.7217C18.4528 15.9495 17.5885 17.2679 16.323 18.1056V21.104H20.19C22.4608 19.014 23.766 15.9274 23.766 12.2765Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                  fill="#34A853"
                />
                <path
                  d="M5.50253 14.3002C4.99987 12.8099 4.99987 11.196 5.50253 9.70569V6.61475H1.51649C-0.18551 10.0055 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3002Z"
                  fill="#FBBC04"
                />
                <path
                  d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_125_836">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Entrar com uma conta do Google</span>
          </div>

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
                onChange={handleEmailChange}
                required
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
                onChange={handlePasswordChange}
                required
              />
              {!password && <span>Insira sua senha !!</span>}
            </label>

            <button type="submit" form="loginForm">
              <span className={bebas_neue.className}>ENTRAR</span>
            </button>
          </FieldsetLogin>

          <ForgetPasswordContainer className={inter.className}>
            <span>Esqueceu sua senha</span>
            <Link href="">Clique aqui </Link>
          </ForgetPasswordContainer>
        </LoginForm>
      </Main>
    </Container>
  );
}
