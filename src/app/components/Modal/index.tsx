'use client';

import { Container } from './styles';
import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  onClickCallback?: () => void;
};

export default function Modal({ children, onClickCallback }: ModalProps) {
  return <Container onClick={onClickCallback}>{children}</Container>;
}
