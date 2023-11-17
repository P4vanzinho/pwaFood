'use client';

import { Container, Button, Bubble } from './styles';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { BiBasket, BiHomeAlt2, BiSearch, BiMinus } from 'react-icons/bi';
import { useRouter, usePathname } from 'next/navigation';
import { useBagContext } from '@/context/bag';
import { ReactNode } from 'react';
import { bebas_neue, inter } from '@/app/fonts';

type MenuBottomPRops = {
  slug: string;
};

export default function MenuBottom({ slug }: MenuBottomPRops) {
  const router = useRouter();
  const path = usePathname();
  const { total } = useBagContext();

  const ViewBubble = () => {
    return (
      <>
        {!!total && (
          <Bubble className={inter.className}>
            {' '}
            {total.toLocaleString('pt-BR')}
          </Bubble>
        )}
      </>
    );
  };

  const buttonsConfig = [
    {
      Icon: BiHomeAlt2,
      route: '/',
      selected: false,
    },
    {
      Icon: BiSearch,
      route: '/buscar',
      selected: false,
    },

    {
      Icon: FaRegHeart,
      route: '/favorito',
      selected: false,
    },
    {
      Icon: BiBasket,
      route: '/sacola',
      selected: false,
      Info: ViewBubble,
    },
    {
      Icon: FaRegUser,
      route: '/usuario',
      selected: false,
    },
  ];

  const buttons = buttonsConfig.map(button => {
    const replaced = path.replace(slug, '').replace('/', '').replace('/', '');
    const selected = replaced === button.route.replace('/', '');

    return {
      ...button,
      selected,
    };
  });

  const sizeIcons = 22;

  const buttonOnClick = (route: string) => {
    router.push(`/${slug}/${route}`);
  };

  return (
    <Container>
      {buttons.map(({ Icon, route, selected, Info }) => (
        <Button
          key={route}
          selected={selected}
          onClick={() => buttonOnClick(route)}
        >
          <Icon size={sizeIcons + 2} />
          <BiMinus />
          {!!Info && <ViewBubble />}
        </Button>
      ))}
    </Container>
  );
}
