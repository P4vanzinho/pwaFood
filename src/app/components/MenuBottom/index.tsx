"use client";

import { Container, Button, Bubble } from "./styles";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { BiBasket, BiHomeAlt2, BiSearch, BiMinus } from "react-icons/bi";
import { useRouter, usePathname } from "next/navigation";
import { useBagContext } from "@/context/bag";
import { inter } from "@/app/fonts";
import { centsToUnities } from "@/utils/money";
import { RiCalendarLine } from "react-icons/ri";

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
            {centsToUnities(total).toLocaleString()}
          </Bubble>
        )}
      </>
    );
  };

  const buttonsConfig = [
    {
      Icon: BiHomeAlt2,
      route: "/",
      selected: false,
    },

    {
      Icon: RiCalendarLine,
      route: "/history",
      selected: false,
    },

    {
      Icon: BiBasket,
      route: "/sacola",
      selected: false,
      Info: ViewBubble,
    },

    {
      Icon: FaRegHeart,
      route: "/favorito",
      selected: false,
    },

    {
      Icon: FaRegUser,
      route: "/usuario",
      selected: false,
    },
  ];

  const buttons = buttonsConfig.map((button) => {
    const replaced = path.replace(slug, "").replace("/", "").replace("/", "");
    const selected = replaced === button.route.replace("/", "");

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
