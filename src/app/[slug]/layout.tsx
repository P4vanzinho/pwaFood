"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import MenuBottom from "../components/MenuBottom";
import { BagContextProvider } from "@/context/bag";
import { LoadingContextProvider } from "@/context/loading";
import FullScreenLoading from "../components/FullScreenLoading";
import { OrderContextProvider } from "@/context/order";
import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getPublicUser, setPublicUserByToken } from "@/utils/cookiePublicUser";
import Version from "../components/Version";
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
import Search from "../../../public/Search.png";
import Delivre from "../../../public/delivre.svg";
import back from "../../../public/back.svg";
import useFoodFetch from "../hooks/useFoodFetch";
import { FoodApiBusiness } from "../../../types/foodApi";
import { EndpointFoodApiEnum } from "../enums";
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
  min-height: 100vh;
`;

interface PublicLayoutProps {
  children: ReactNode;
  params: {
    slug: string;
  };
}

function PublicLayout(props: PublicLayoutProps) {
  const searchParams = useSearchParams();
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const token = searchParams.get("u");
  const slug = props?.params?.slug;
  const user = getPublicUser();
  const currentPath = usePathname();
  const isSlugSubRoute = currentPath.startsWith(`/${slug}/`);
  const router = useRouter();

  // Use useRef para criar uma referência ao input
  const inputRef = useRef<HTMLInputElement>(null);

  if (token) {
    setPublicUserByToken(token);
  }
  const { data } = useFoodFetch<FoodApiBusiness>(
    `${EndpointFoodApiEnum.BUSINESS}/${props.params.slug}`,
  );

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

            {!!data?.name && (
              <SlugNameContainer>
                <span className={poppins.className}>{data.name}</span>
                {!!user?.name && (
                  <>
                    <span className={poppins.className}> {user?.name}!</span>
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
      <Version />
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
