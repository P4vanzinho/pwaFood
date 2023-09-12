import {
  Container,
  BusinessContainer,
  ContentContainer,
  LogoButton,
  WelcomeAndMenuContainer,
  Button,
} from './styles';
import { bebas_neue, poppins } from '../../fonts';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Image } from 'next/dist/client/image-component';

type ButtonSelected =
  | 'Cardapio'
  | 'Promocoes'
  | 'Pedidos'
  | 'Configurar Whatsapp';

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

  const [buttonSelected, setButtonSelected] =
    useState<ButtonSelected>('Cardapio');

  type Button = {
    title: string;
    selected: ButtonSelected;
    route: string;
  };

  const buttons: Button[] = [
    {
      title: 'Cardapio',
      selected: 'Cardapio',
      route: '/admin/produtos',
    },
    {
      title: 'Promoções',
      selected: 'Promocoes',
      route: '/admin/promocoes',
    },
  ];

  /* function handleButtonsOfMenu(index: number) {
    const newButtonsState = [...linkButtons];
    newButtonsState.fill(false);
    newButtonsState[index] = true;
    setLinkButtons(newButtonsState);
    if (index === 0) {
      router.push('/admin/produtos');
    }
  } */

  /*   useEffect(() => {
    if (pathname === '/admin/produtos') {
      setLinkButtons(prevButton => prevButton.map((_, index) => index === 0));
    }
  }, [pathname]); */

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
            {buttons.map((button, index) => (
              <Button
                selected={buttonSelected === button.selected}
                key={index}
                onClick={() => setButtonSelected(button.selected)}
              >
                {button.title}
              </Button>
            ))}
          </section>
        </WelcomeAndMenuContainer>
      </ContentContainer>
    </Container>
  );
}
