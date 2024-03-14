"use client";

import { Container } from "./styles";
import { ReactNode, useEffect } from "react";

type ModalProps = {
  children: ReactNode;
  onClickCallback?: () => void;
};

export default function Modal({ children, onClickCallback }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return <Container onClick={onClickCallback}>{children}</Container>;
}
