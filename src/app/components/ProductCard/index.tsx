import { FoodApiProduct } from "../../../../types/foodApi";
import Text from "../Text";
import Price from "../Price";

import { usePathname, useRouter } from "next/navigation";
import {
  Container,
  PhotoFood,
  Foodname,
  PriceAndLikeContainer,
} from "./styles";
import { poppins } from "@/app/fonts";
import Heart from "../../../../public/Heart.svg";
import Image from "next/image";

type ProductCardProps = {
  data: FoodApiProduct;
  mode: "private" | "public";
};

export default function ProductCard({ data, mode }: ProductCardProps) {
  const pathname = usePathname();
  const router = useRouter();
  const description = `Ovo cru, rúcula e tempero da casa. Uma delícia!`;

  const cardOnClick = () => {
    const path =
      mode === "public"
        ? `${pathname}/item/${data.slug}`
        : `/painel-administrativo/produto/${data.slug}`;

    router.push(path);
  };

  return (
    <Container onClick={cardOnClick}>
      {!!data.upload?.url && (
        <PhotoFood
          src={data.upload.url}
          height={130}
          width={160}
          alt={data.name}
        />
      )}

      <div className={poppins.className}>
        <Foodname>{data.name}</Foodname>
        <Text>{description}</Text>

        <PriceAndLikeContainer>
          <Image src={Heart} alt="likeImage" height={13} width={13} />
          <Price>{data.price ?? "sob consulta"}</Price>
        </PriceAndLikeContainer>
      </div>
    </Container>
  );
}
