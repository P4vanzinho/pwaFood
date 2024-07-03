"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import MenuBottom from "../components/MenuBottom";
import { BagContextProvider } from "@/context/bag";
import { OrderContextProvider } from "@/context/order";
import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  SlugHeader,
  SlugNameContainer,
  SearchButton,
  SearchAndLogoContainer,
  InputSearchContainer,
  BackButton,
} from "./styles";
import { poppins } from "../fonts";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import Delivre from "../../../public/delivre.svg";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
  background-color: ${theme.COLORS.LIGHT};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  max-height: 100vh;
  overflow-y: hidden;
  padding: 6.625rem 1.438rem;
`;

interface PublicLayoutProps {
  children: ReactNode;
  params: {
    slug: string;
  };
}

function PublicLayout(props: PublicLayoutProps) {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const slug = props?.params?.slug;
  const userName = "Thiago Pavan da Silva";
  const currentPath = usePathname();
  const isSlugSubRoute = currentPath.startsWith(`/${slug}/`);
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
    <>
      <SlugHeader>
        {isSearching && !isSlugSubRoute ? (
          <InputSearchContainer>
            <input
              ref={inputRef}
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
            <SearchAndLogoContainer onClick={() => setIsSearching(true)}>
              {isSlugSubRoute ? (
                <BackButton onClick={() => router.back()}>
                  <IoIosArrowBack size={25} />
                </BackButton>
              ) : (
                <SearchButton>
                  <CiSearch size={25} />
                </SearchButton>
              )}
            </SearchAndLogoContainer>

            {!!userName && (
              <SlugNameContainer>
                <span className={poppins.className}>{slug}</span>
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
      </SlugHeader>

      <OrderContextProvider>
        <BagContextProvider>
          <Wrapper>
            <Container>{props.children}</Container>
            <MenuBottom slug={props.params.slug} />
          </Wrapper>
        </BagContextProvider>
      </OrderContextProvider>
    </>
  );
}
export default PublicLayout;
