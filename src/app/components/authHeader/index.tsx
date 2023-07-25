import { Container, LogoButton, MenuLinks, AuthLinks } from './styles';

import { bebas_neue, poppins } from '../../fonts';

import Link from 'next/link';
import { useState } from 'react';

export function AuthHeader() {
  const [isButtonGreen1, setIsButtonGreen1] = useState<boolean>(true);
  const [isButtonGreen2, setIsButtonGreen2] = useState<boolean>(false);

  function handleSignIn() {
    if (isButtonGreen1 === false) {
      setIsButtonGreen1(true);
      setIsButtonGreen2(false);
    }
  }

  function handleSignUp() {
    if (isButtonGreen2 === false) {
      setIsButtonGreen1(false);
      setIsButtonGreen2(true);
    }
  }

  return (
    <Container>
      <LogoButton className={bebas_neue.className}>
        <span>FOOD</span>
        <span>-</span>
        <span>E</span>
      </LogoButton>

      <MenuLinks className={bebas_neue.className}>
        <Link href="">PRODUTOS</Link>
        <Link href="">PREÇOS</Link>
        <Link href="">COMO USAR ?</Link>
      </MenuLinks>

      <AuthLinks>
        <button
          onClick={handleSignIn}
          className={
            isButtonGreen1 ? 'green_bg_white_color' : 'gray_bg_black_color'
          }
        >
          <Link href="" className={poppins.className}>
            Login
          </Link>
        </button>

        <button
          onClick={handleSignUp}
          className={
            isButtonGreen2 ? 'green_bg_white_color' : 'gray_bg_black_color'
          }
        >
          <Link href="" className={poppins.className}>
            Cadastro
          </Link>
        </button>
      </AuthLinks>
    </Container>
  );
}
