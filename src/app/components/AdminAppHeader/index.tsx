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
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Image } from 'next/dist/client/image-component';
import { socketIo } from '@/socket/io';

type menuButtonSelected = 'cardapio' | 'whatsapp';

export default function AdminAppHeader() {
  useEffect(() => {
    socketIo.on('connect', () => {});

    socketIo.on('whatsapp-appState', (c: any) => {
      alert(JSON.stringify(c));
    });

    socketIo.on('whatsapp-connectFailure', () => {
      alert('whatsapp-connectFailure');
    });

    socketIo.on('whatsapp-disconnected', () => {
      alert('whatsapp-disconnected');
    });
  }, []);

  const { data: session } = useSession();
  const router = useRouter();
  const business = session?.data?.business?.length
    ? session?.data?.business[0]
    : null;

  const businessName = business?.name.toUpperCase();
  const userName = session?.data.name;

  const [menuButtonSelected, setMenuButtonSelected] =
    useState<menuButtonSelected>('cardapio');

  const menuButtonOnClick = (menuButton: MenuButton) => {
    setMenuButtonSelected(menuButton.selected);
    router.push(menuButton.route);
  };

  type MenuButton = {
    title: string;
    selected: menuButtonSelected;
    route: string;
  };

  const menuButtons: MenuButton[] = [
    {
      title: 'Cardapio',
      selected: 'cardapio',
      route: '/admin/produtos',
    },
    {
      title: 'Configurar Whatsapp',
      selected: 'whatsapp',
      route: '/admin/whatsapp',
    },
  ];

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
