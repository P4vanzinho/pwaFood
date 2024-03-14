import {
  Container,
  ImageContainer,
  DescriptionsContainer,
  SelectButton,
} from "./styles";
import Image from "next/image";
import { bebasNeue, poppins } from "@/app/fonts";

import { useRouter } from "next/navigation";

interface Props {
  showSidebar: () => void;
}

export default function SidebarProductTemplates({ showSidebar }: Props) {
  const router = useRouter();
  return (
    <Container>
      <header>
        <h1 className={bebasNeue.className}>QUAL O MODELO DO PRODUTO</h1>
        <button onClick={showSidebar}>
          <Image
            src="/CloseNewProduct.jpg"
            alt={"close"}
            width={25}
            height={15}
          />
        </button>
      </header>

      <SelectButton onClick={() => router.push("/admin/novoproduto")}>
        <ImageContainer>
          <Image src="/Beef.png" alt={"beef image"} width={28} height={25} />
        </ImageContainer>
        <DescriptionsContainer className={poppins.className}>
          <h2>Item principal</h2>
          <p>Lanches, sucos, bebidas, remedios, mercado, etc</p>
        </DescriptionsContainer>
      </SelectButton>

      <SelectButton>
        <ImageContainer>
          <Image src="/Pizza.png" alt={"pizza image"} width={25} height={36} />
        </ImageContainer>
        <DescriptionsContainer className={poppins.className}>
          <h2>Pizza</h2>
          <p>Para definir tipos de massas, bordas, sabores, etc</p>
        </DescriptionsContainer>
      </SelectButton>
    </Container>
  );
}
