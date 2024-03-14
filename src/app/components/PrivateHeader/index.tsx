"use client";
import { Container, Logo, MenuTopCenter, RightTopMenu } from "./styles";

import { bebasNeue } from "../../fonts";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

import Link from "next/link";

import { RoutesEnum } from "@/app/enums";
import classNames from "classnames";

export default function PrivateHeader() {
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
      <Logo className={bebasNeue.className}>
        <div>
          <Image
            src="https://fooda.nyc3.digitaloceanspaces.com/develop/751df1fe-b516-4b2d-8dd4-916b54d3bd22.png"
            width={30}
            height={30}
            alt={`mc_donalds_logo`}
          ></Image>
          <span>MC DONALDS</span>
        </div>
        <div>
          <span>FOOD</span>
          <span>-</span>
          <span>E</span>
        </div>
      </Logo>

      <MenuTopCenter className={bebasNeue.className}>
        <Link
          className={classNames({ selected: pathname === RoutesEnum.PRODUTOS })}
          href={RoutesEnum.PRODUTOS}
        >
          PRODUTOS
        </Link>

        <Link
          className={classNames({ selected: pathname === RoutesEnum.WHATSAPP })}
          href={RoutesEnum.WHATSAPP}
        >
          CONFIGURAR WHATSAPP
        </Link>
      </MenuTopCenter>
    </Container>
  );
}
