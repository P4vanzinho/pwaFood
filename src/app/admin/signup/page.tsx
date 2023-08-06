'use client';

import {
  Container,
  Main,
  FieldsetRegister,
  ForgetPasswordContainer,
} from './styles';

import AuthHeader from '../../components/AuthHeader';

import Image from 'next/image';
import { inter, bebas_neue } from '@/app/fonts';
import Link from 'next/link';
import { useState } from 'react';

import { SyntheticEvent } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { foodFetch } from '@/app/services/foodFetch/foodFetch';
import useFoodFetch from '@/app/hooks/useFoodFetch';
import { EndpointFoodApiEnum } from '@/app/enums/foodApi/EndpointFoodApiEnum';

//Estou considerando que esta page.tsx é a do administrador.
export default function Register() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notSeePassword, setNotSeePassword] = useState(true);
  const [notSeeConfirmPassword, setNotSeeConfirmPassword] = useState(true);
  const [matchPasswordError, setMatchPasswordError] = useState<string>('');

  const diferentPasswords =
    password && confirmPassword && password !== confirmPassword;

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const response = await foodFetch<ResponseType>({
      method: 'POST',
      body: {
        email,
        password,
        name,
        phone,
      },
      endPoint: EndpointFoodApiEnum.TENANT,
    });
  }

  function handleShowPassword() {
    setNotSeePassword(!notSeePassword);
  }

  function handleShowConfirmPassword() {
    setNotSeeConfirmPassword(!notSeePassword);
  }

  function validatePassword() {
    if (password && confirmPassword && password !== confirmPassword) {
      setMatchPasswordError(
        'Os campos  "Senha" e "Confirmar senha" não correspondem ',
      );
    } else {
      setMatchPasswordError('');
    }
  }

  return (
    <Container>
      <AuthHeader />
      <Main>
        <form onSubmit={handleSubmit}>
          <FieldsetRegister>
            <label htmlFor="email" className={bebas_neue.className}>
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

            <label htmlFor="phone" className={bebas_neue.className}>
              TELEFONE
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="(14)982098429"
                onChange={e => setPhone(e.target.value)}
                value={phone}
              />
              {!phone && <span>Insira seu Telefone !!</span>}
            </label>

            <label htmlFor="name" className={bebas_neue.className}>
              NOME
              <input
                id="name"
                type="text"
                placeholder="Rogério"
                onChange={e => setName(e.target.value)}
                value={name}
                minLength={1}
              />
              {!name && <span>Insira seu nome !!</span>}
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
                  onBlur={validatePassword}
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

            <label htmlFor="confirmPassword" className={bebas_neue.className}>
              CONFIRMAR SENHA
              <div>
                <input
                  id="confirmPassword"
                  type={notSeeConfirmPassword ? 'password' : 'text'}
                  placeholder="Password"
                  onChange={e => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  minLength={1}
                  onBlur={validatePassword}
                />

                <button onClick={handleShowConfirmPassword} type="button">
                  {notSeeConfirmPassword ? (
                    <AiFillEye name="eye" size={20} />
                  ) : (
                    <AiFillEyeInvisible name="invisibleEye" size={20} />
                  )}
                </button>
              </div>
              {!confirmPassword && <span>Confirme sua senha !!</span>}
              {diferentPasswords && <span> {matchPasswordError}</span>}
            </label>

            <button type="submit">
              <span className={bebas_neue.className}>CADASTRAR</span>
            </button>
          </FieldsetRegister>

          <ForgetPasswordContainer className={inter.className}>
            <span>Esqueceu sua senha</span>
            <Link href="">Clique aqui </Link>
          </ForgetPasswordContainer>
        </form>
      </Main>
    </Container>
  );
}
