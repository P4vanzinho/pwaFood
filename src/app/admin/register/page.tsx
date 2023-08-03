'use client';

import {
  RegisterForm,
  Container,
  Main,
  FieldsetRegister,
  ForgetPasswordContainer,
} from './styles';

import AuthHeader from '../../components/AuthHeader';

import Image from 'next/image';
import { poppins, inter, bebas_neue } from '@/app/fonts';
import Link from 'next/link';
import { useState, ChangeEvent } from 'react';

//Estou considerando que esta page.tsx é a do administrador.
export default function Register() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(event.target.value);
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleConfirmPasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(event.target.value);
  }

  return (
    <Container>
      <AuthHeader />
      <Main>
        <RegisterForm>
          <FieldsetRegister>
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

            <label htmlFor="phone">
              TELEFONE
              <input
                id="phone"
                type="tel"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="(14)982098429"
                onChange={handlePhoneChange}
                value={phone}
                required
              />
              {!phone && <span>Insira seu Telefone !!</span>}
            </label>

            <label htmlFor="name">
              NOME
              <input
                id="name"
                type="text"
                placeholder="Rogério"
                onChange={handleNameChange}
                value={name}
                minLength={1}
                required
              />
              {!name && <span>Insira seu nome !!</span>}
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

            <label htmlFor="confirmPassword">
              CONFIRMAR SENHA
              <input
                id="confirmPassword"
                type="password"
                placeholder="Password"
                onChange={handleConfirmPasswordChange}
                required
                value={email}
                minLength={1}
              />
              {!confirmPassword && <span>Confirme sua senha !!</span>}
            </label>

            <button type="submit" form="loginForm">
              <span className={bebas_neue.className}>ENTRAR</span>
            </button>
          </FieldsetRegister>

          <ForgetPasswordContainer className={inter.className}>
            <span>Esqueceu sua senha</span>
            <Link href="">Clique aqui </Link>
          </ForgetPasswordContainer>
        </RegisterForm>
      </Main>
    </Container>
  );
}
