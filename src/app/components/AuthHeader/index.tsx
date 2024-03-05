'use client';
import { Container, Logo, MenuTopCenter, RightTopMenu } from './styles';

import { bebas_neue, poppins } from '../../fonts';
import { useRouter, usePathname } from 'next/navigation';

import Link from 'next/link';
import { useState, useEffect, ReactNode } from 'react';
import Button from '../Button';
import { RoutesEnum } from '@/app/enums';

export default function AuthHeader() {
  const router = useRouter();
  const pathname = usePathname();

  function handleSignIn() {
    router.push(RoutesEnum.LOGIN);
  }

  function handleSignUp() {
    router.push(RoutesEnum.SIGNUP);
  }

  return (
    <Container>
      <Logo className={bebas_neue.className}>
        <span>FOOD</span>
        <span>-</span>
        <span>E</span>
      </Logo>

      <MenuTopCenter className={bebas_neue.className}>
        <Link href="">PRODUTOS</Link>
        <Link href="">PREÇOS</Link>
        <Link href="">COMO USAR ?</Link>
      </MenuTopCenter>

      <RightTopMenu>
        <Button
          text="Cadastro"
          enabledSelect
          selected={pathname === RoutesEnum.SIGNUP}
          onClick={handleSignUp}
        />
        <Button
          text="Login"
          onClick={handleSignIn}
          enabledSelect
          selected={pathname === RoutesEnum.LOGIN}
        />
      </RightTopMenu>
    </Container>
  );
}
