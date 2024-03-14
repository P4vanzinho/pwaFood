"use client";

import { Container, FieldsetRegister, ForgetPasswordContainer } from "./styles";
import { inter, poppins } from "@/app/fonts";
import Link from "next/link";
import { useState, SyntheticEvent } from "react";

import { foodFetch } from "@/app/services/foodFetch/foodFetch";
import { EndpointFoodApiEnum } from "@/app/enums/foodApi/EndpointFoodApiEnum";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { useLoadingContext } from "@/context/loading";

export default function Register() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notSeePassword, setNotSeePassword] = useState(true);
  const [notSeeConfirmPassword, setNotSeeConfirmPassword] = useState(true);
  const [matchPasswordError, setMatchPasswordError] = useState<string>("");

  const { loading, setLoading } = useLoadingContext();

  const diferentPasswords =
    password && confirmPassword && password !== confirmPassword;

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const response = await foodFetch<ResponseType>({
      method: "POST",
      body: {
        email,
        password,
        name,
        businessName,
        phone,
      },
      endPoint: EndpointFoodApiEnum.TENANT,
    });
  }

  function validatePassword() {
    if (password && confirmPassword && password !== confirmPassword) {
      setMatchPasswordError(
        'Os campos  "Senha" e "Confirmar senha" não correspondem ',
      );
    } else {
      setMatchPasswordError("");
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FieldsetRegister>
          <Input
            type="email"
            placeholder="Digite um email válido"
            label="EMAIL"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="CELULAR"
            id="phone"
            type="tel"
            name="phone"
            placeholder="Digite seu telefone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />

          <Input
            label="NOME"
            id="name"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            minLength={1}
            required
          />

          <Input
            label="QUAL O NOME DA SUA EMPRESA ?"
            id="businessName"
            type="text"
            placeholder="Digite o nome da empresa"
            onChange={(e) => setBusinessName(e.target.value)}
            value={businessName}
            minLength={1}
            required
          />

          <Input
            label="SENHA"
            id="password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            minLength={1}
            required
          />

          <Input
            label="CONFIRMAR SENHA"
            id="confirmPassword"
            type={"password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            minLength={1}
            required
          />

          {diferentPasswords && (
            <span className={poppins.className}> {matchPasswordError}</span>
          )}

          <Button text="CADASTRAR" />
        </FieldsetRegister>

        <ForgetPasswordContainer className={inter.className}>
          <span>Esqueceu sua senha</span>
          <Link href="">Clique aqui </Link>
        </ForgetPasswordContainer>
      </form>
    </Container>
  );
}
