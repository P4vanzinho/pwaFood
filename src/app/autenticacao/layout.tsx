"use client";

import { ReactNode } from "react";
import AuthAndSlugHeader from "../components/AuthAndSlugHeader";

interface PublicLayoutProps {
  children: ReactNode;
  params: {
    slug: string;
  };
}
export default function AuthLayout(props: PublicLayoutProps) {
  const userName = "Thiago Pavan da Silva";
  const slug = "fogo-no-porquinho";
  return (
    <>
      <AuthAndSlugHeader userName={userName} slugName={slug} />
      {props.children}
    </>
  );
}
