"use client";

import {
  Container,
  TitleContainer,
  OtpContainer,
  Timer,
  ResendCode,
} from "./styles";
import Title from "@/app/components/Title";
import OtpInput from "react-otp-input";
import Input from "@/app/components/Input";
import { ReactNode, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { urbanist } from "@/app/fonts";
import Button from "@/app/components/Button";

interface PublicUserAuthProps {
  children: ReactNode;
  params: {
    slug: string;
  };
}

export default function PublicUserAuth(props: PublicUserAuthProps) {
  const currentPath = usePathname();
  const isPublicAuth = currentPath.startsWith(`/autenticacao`);
  const timeRemaining = "2:34";
  const [otp, setOtp] = useState("");
  let tel = "(17) 7428-0874";
  const searchParams = useSearchParams();

  const userId = searchParams.get("userId");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Button clicked!");
  };
  return (
    <Container>
      <TitleContainer>
        <Title isPublicAuth>Verificação de código </Title>
        <p className={urbanist.className}>
          Digite o código que enviamos para o Whatsapp <span>{tel}</span>
        </p>
      </TitleContainer>

      <form onSubmit={handleSubmit} className={urbanist.className}>
        <Timer>{timeRemaining}</Timer>

        <OtpContainer>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={() => <span></span>}
            renderInput={(props) => <input {...props} inputMode="text" />}
            inputStyle="custom-otp-input"
            inputType="text"
          />
        </OtpContainer>

        <ResendCode>
          Não recebeu o código? <button>Reenviar. </button>
        </ResendCode>

        <Button
          typeOfButton="submit"
          text="Pegar codigo"
          isPublicAuth={isPublicAuth}
        />
      </form>
    </Container>
  );
}
