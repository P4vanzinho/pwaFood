'use client';

import {
  Container,
  BusinessContainer,
  ContentContainer,
  LogoButton,
  WelcomeAndMenuContainer,
  Button,
} from './styles';
import { bebas_neue, poppins } from '../../fonts';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Image } from 'next/dist/client/image-component';

type MenuButtonSelected = 'cardapio' | 'whatsapp';

export default function AdminAppHeader() {
  const { data: session } = useSession();

  const business = session?.data?.business?.length
    ? session?.data?.business[0]
    : null;

  const pathname = usePathname();

  const menuButtons = [
    {
      title: 'Cardapio',
      selected: 'cardapio' as MenuButtonSelected,
      route: '/admin/produtos',
    },
    {
      title: 'Configurar Whatsapp',
      selected: 'whatsapp' as MenuButtonSelected,
      route: '/admin/whatsapp',
    },
  ];

  const [menuButtonSelected, setMenuButtonSelected] = useState<
    MenuButtonSelected | undefined
  >(() => {
    const buttonSelected = menuButtons.find(
      button => button.route === pathname,
    );

    return buttonSelected?.selected as MenuButtonSelected;
  });

  const router = useRouter();

  const businessName = business?.name.toUpperCase();
  const userName = session?.data.name;

  const menuButtonOnClick = (menuButton: MenuButton) => {
    setMenuButtonSelected(menuButton.selected);
    router.push(menuButton.route);
  };

  type MenuButton = {
    title: string;
    selected: MenuButtonSelected;
    route: string;
  };

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
            {menuButtons.map((menuButton, index) => (
              <Button
                key={index}
                selected={menuButtonSelected === menuButton.selected}
                onClick={() => menuButtonOnClick(menuButton)}
              >
                {menuButton.title}
              </Button>
            ))}
          </section>
        </WelcomeAndMenuContainer>
      </ContentContainer>
    </Container>
  );
}
