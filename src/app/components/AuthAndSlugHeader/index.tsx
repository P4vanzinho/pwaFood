"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  Container,
  SlugNameContainer,
  SearchButton,
  SearchAndLogoContainer,
  InputSearchContainer,
  BackButton,
} from "./styles";
import { poppins } from "@/app/fonts";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import Delivre from "../../../../public/delivre.svg";
import { CiSearch } from "react-icons/ci";

import { IoIosArrowBack } from "react-icons/io";

interface AuthAndSlugHeaderProps {
  userName: string;
  slugName?: string;
}

export default function AuthAndSlugHeader({
  userName,
  slugName,
}: AuthAndSlugHeaderProps) {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const currentPath = usePathname();
  const isSlugSubRoute = currentPath.startsWith(`/${slugName}/`);
  const isAuthRoutes = currentPath.startsWith(`/autenticacao`);
  const isWpAuthRoutes = currentPath.startsWith(`/autenticacao/whatsapp`);

  const isConfirmationAuthRoute = currentPath.startsWith(
    `/autenticacao/confirmacao`,
  );
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsSearching(false);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsSearching(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Container>
      {isSearching && !isSlugSubRoute && !isAuthRoutes ? (
        <InputSearchContainer>
          <input
            ref={inputRef} // Adicione a referência ao input
            type="text"
            placeholder="Salada de ovo"
            className={poppins.className}
            onBlur={() => setIsSearching(false)}
          />

          <button onClick={() => setIsSearching(false)}>
            <MdClose size={20} />
          </button>
        </InputSearchContainer>
      ) : (
        <>
          {!isWpAuthRoutes ? (
            <SearchAndLogoContainer onClick={() => setIsSearching(true)}>
              {isSlugSubRoute || isConfirmationAuthRoute ? (
                <BackButton onClick={() => router.back()}>
                  <IoIosArrowBack size={25} />
                </BackButton>
              ) : (
                <SearchButton>
                  <CiSearch size={25} />
                </SearchButton>
              )}
            </SearchAndLogoContainer>
          ) : (
            <div></div>
          )}

          {!!userName && (
            <SlugNameContainer>
              <span className={poppins.className}>{slugName}</span>
              {!!userName && (
                <>
                  <span className={poppins.className}> {userName}!</span>
                </>
              )}
            </SlugNameContainer>
          )}
        </>
      )}

      <SearchAndLogoContainer>
        <Image src={Delivre} alt={`slugImage`} width={23} height={23} />
      </SearchAndLogoContainer>
    </Container>
  );
}
