'use client';

import { Container, Greetings, Info, InfoUser, RightMenu } from './styles';
import { poppins } from '../../fonts';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Image } from 'next/dist/client/image-component';
import { RoutesEnum } from '@/app/enums';
import Button from '../Button';

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
      route: RoutesEnum.PRODUTOS,
    },
    {
      title: 'Configurar Whatsapp',
      selected: 'whatsapp' as MenuButtonSelected,
      route: RoutesEnum.WHATSAPP,
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

  const businessName = business?.name?.toUpperCase();
  const userName = session?.data?.name;

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
      <Info>
        <div>
          <Image
            width={25}
            height={25}
            src="https://fooda.nyc3.digitaloceanspaces.com/develop/751df1fe-b516-4b2d-8dd4-916b54d3bd22.png"
            alt={'logo '}
          ></Image>
          <span>MC-DONALDS</span>
        </div>

        <Image
          width={97}
          height={53}
          src="https://fooda.nyc3.digitaloceanspaces.com/develop/390a1c4a-db76-4ff5-ab07-b316fe419633.png"
          alt={'logo '}
        ></Image>
      </Info>

      <span>Olá, Rogerio Pavan da Silva!</span>

      <RightMenu>
        <Button text="Produtos" />
        <Button text="Configurar Whatsapp" />
      </RightMenu>
    </Container>
  );
}
