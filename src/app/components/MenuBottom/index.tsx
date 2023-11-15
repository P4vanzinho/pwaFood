import { Container, Button } from './styles';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { BiBasket, BiHomeAlt2, BiSearch, BiMinus } from 'react-icons/bi';
import { useRouter, usePathname } from 'next/navigation';
import { useContext, useMemo, useState } from 'react';
import AppContext from '@/context';

type MenuBottomPRops = {
  slug: string;
};

export default function MenuBottom({ slug }: MenuBottomPRops) {
  const router = useRouter();
  const path = usePathname();

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
      Icon: BiBasket,
      route: '/carrinho',
      selected: false,
    },
    {
      Icon: FaRegHeart,
      route: '/favorito',
      selected: false,
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
      {buttons.map(({ Icon, route, selected }) => (
        <Button
          key={route}
          selected={selected}
          onClick={() => buttonOnClick(route)}
        >
          <Icon size={sizeIcons + 2} />
          <BiMinus />
        </Button>
      ))}
    </Container>
  );
}
