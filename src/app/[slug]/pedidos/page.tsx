"use client";

import Image from "next/image";
import {
  Container,
  TitleContainer,
  RequestsContainer,
  RequestCard,
  CardHeader,
  MenuRequestCard,
  ContentRequestCard,
  StatusSpan,
} from "./styles";
import Title from "@/app/components/Title";
import Clock from "../../../../public/clock.svg";
import MenuCardRequest from "../../../../public/MenuCardRequest.svg";
import { poppins } from "@/app/fonts";

export default function Requests() {
  //get pedidos mockado.
  const pedidos = [
    {
      date: "Quarta 20 Jun, 2024 ,  20:00", // provavelmente sera um newDate ou ms.
      qty: 4,
      price: 23.99,
      status: "enviado",
    },
    {
      date: "Sexta 21 Jun, 2024 ,  21:00", // provavelmente sera um newDate ou ms.
      qty: 5,
      price: 25.99,
      status: "cancelado",
    },
    {
      date: "Quinta 21 Jun, 2024 ,  22:00", // provavelmente sera um newDate ou ms.
      qty: 7,
      price: 34.99,
      status: "enviado",
    },
    {
      date: "Quinta 21 Jun, 2024 ,  22:00", // provavelmente sera um newDate ou ms.
      qty: 7,
      price: 34.99,
      status: "finalizado",
    },
    {
      date: "Quinta 21 Jun, 2024 ,  22:00", // provavelmente sera um newDate ou ms.
      qty: 7,
      price: 34.99,
      status: "finalizado",
    },
  ];

  return (
    <Container>
      <TitleContainer>
        <Title>Meus Pedidos</Title>
      </TitleContainer>
      <RequestsContainer>
        {pedidos.map((pedido, index) => (
          <RequestCard key={index}>
            <CardHeader>
              <Image src={Clock} alt={"relogio"} />
              <span className={poppins.className}>{pedido.date}</span>
              <MenuRequestCard>
                <Image
                  src={MenuCardRequest}
                  alt={"imagem para abrir menu de opcoes"}
                />
              </MenuRequestCard>
            </CardHeader>
            <ContentRequestCard className={poppins.className}>
              <span>{pedido.qty} itens</span>
              <div>
                <span>${pedido.price}</span>
                <StatusSpan status={pedido.status}>{pedido.status}</StatusSpan>
              </div>
            </ContentRequestCard>
          </RequestCard>
        ))}
      </RequestsContainer>
    </Container>
  );
}
