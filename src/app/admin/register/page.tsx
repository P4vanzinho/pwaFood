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
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

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

  const router = useRouter();

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const response = await fetch(
      'https://goldfish-app-vg4r3.ondigitalocean.app/tenant',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name,
          phone,
        }),
      },
    );

    const body = await response.json();

    if (body.error) {
      toast.error(body.error);
    } else {
      toast.success('Agora você faz parte família');
    }
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

            <label htmlFor="phone">
              TELEFONE
              <input
                id="phone"
                type="tel"
                name="phone"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="(14)982098429"
                onChange={e => setPhone(e.target.value)}
                value={phone}
              />
              {!phone && <span>Insira seu Telefone !!</span>}
            </label>

            <label htmlFor="name">
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

            <label htmlFor="confirmPassword">
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
