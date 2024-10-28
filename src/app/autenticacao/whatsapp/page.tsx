"use client";

import { Container, TitleContainer } from "./styles";
import Title from "@/app/components/Title";

import Input from "@/app/components/Input";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { urbanist } from "@/app/fonts";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

interface WhatsAppCodeConfirmationProps {
  children: ReactNode;
  params: {
    slug: string;
  };
}

export default function WhatsAppCodeConfirmation(
  props: WhatsAppCodeConfirmationProps,
) {
  const currentPath = usePathname();
  const isPublicAuth = currentPath.startsWith(`/autenticacao`);
  const [phone, setPhone] = useState<string>("");
  const router = useRouter();
  const userId = "122";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/autenticacao/confirmacao?userId=${userId}`);
  };

  return (
    <Container>
      <TitleContainer>
        <Title isPublicAuth>Autenticação por Whatsapp </Title>
        <p className={urbanist.className}>
          Nós enviaremos um código de confirmação <br />
          pelo <br />
          <span>Whatsapp</span> para o número informado abaixo.
        </p>
      </TitleContainer>

      <form onSubmit={handleSubmit}>
        <Input
          label="Número do Whatsapp "
          id="phone"
          type="cellphone"
          name="phone"
          placeholder="Digite o número do Whatsapp com o DDD"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
          isPublicAuth={isPublicAuth}
        />

        <Button
          typeOfButton="submit"
          text="Pegar codigo"
          isPublicAuth={isPublicAuth}
          onClick={() => handleSubmit}
          type="submit"
        />
      </form>
    </Container>
  );
}
