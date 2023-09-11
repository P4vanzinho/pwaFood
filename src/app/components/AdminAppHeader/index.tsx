import {
  Container,
  BusinessContainer,
  ContentContainer,
  LogoButton,
  WelcomeAndMenuContainer,
} from './styles';
import { bebas_neue, poppins } from '../../fonts';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Image } from 'next/dist/client/image-component';

export default function AdminAppHeader() {
  const { data: session } = useSession();
  const router = useRouter();
  const business = session?.data?.business?.length
    ? session?.data?.business[0]
    : null;

  const pathname = usePathname();
  const businessName = business?.name.toUpperCase();

  const userName = session?.data.name;
  const quantityOfButtons = 4;

  const [linkButtons, setLinkButtons] = useState(
    new Array(quantityOfButtons).fill(false),
  );

  function getTitleButtonForIndex(index?: number) {
    switch (index) {
      case 0:
        return 'Cardapio';
      case 1:
        return 'Promocoes';
      case 2:
        return 'Pedidos';
      case 3:
        return 'Configurar Whatsapp';
    }
  }

  function handleButtonsOfMenu(index: number) {
    const newButtonsState = [...linkButtons];
    newButtonsState.fill(false);
    newButtonsState[index] = true;
    setLinkButtons(newButtonsState);
    if (index === 0) {
      router.push('/admin/produtos');
    }
  }

  useEffect(() => {
    if (pathname === '/admin/produtos') {
      setLinkButtons(prevButton => prevButton.map((_, index) => index === 0));
    }
  }, [pathname]);

  return (
    <Container>
      <BusinessContainer>
        <Image src="/businessLogo.png" alt="" height={24} width={24} />
        <span className={poppins.className}>{businessName} </span>
      </BusinessContainer>
      <ContentContainer>
        <LogoButton
          className={bebas_neue.className}
          onClick={() => router.push('/admin/produtos')}
        >
          <span>FOOD-</span>
          <span>E</span>
        </LogoButton>

        <WelcomeAndMenuContainer>
          <div className={poppins.className}>
            <span> Olá, </span>
            <span>{userName}</span>
          </div>

          <section className={poppins.className}>
            {Array.from({ length: quantityOfButtons }).map((_, index) => (
              <button
                key={index}
                className={
                  linkButtons[index]
                    ? 'green_bg_white_color'
                    : 'gray_bg_black_color'
                }
                onClick={() => {
                  handleButtonsOfMenu(index);
                }}
              >
                {getTitleButtonForIndex(index)}
              </button>
            ))}
          </section>
        </WelcomeAndMenuContainer>
      </ContentContainer>
    </Container>
  );
}
