'use client';
import { Container } from './styles';
import { ReactNode } from 'react';

interface ButtonRegistrationType {
  children: ReactNode;
}

export default function RegistrationButton({
  children,
}: ButtonRegistrationType) {
  return <Container>{children}</Container>;
}
