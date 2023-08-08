'use client';
import {
  Container,
  NotListProductContainer,
  Main,
  MainMenu,
  CategoryContainer,
  CategoryContainerParent,
  AddButton,
  AddButtonOptions,
  Overlay,
} from './styles';
import AdminAppHeader from '@/app/components/AdminAppHeader';
import CardFood from '@/app/components/CardFood';
import { poppins, bebas_neue } from '@/app/fonts';
import { CiFaceSmile } from 'react-icons/ci';
import Image from 'next/image';
import { IoMdAdd } from 'react-icons/io';
import { useState } from 'react';

export default function Products() {
  const [borderProduct, setBorderProduct] = useState<boolean>(true);
  const [borderCategory, setBorderCategory] = useState<boolean>(false);
  const [isAddButtonClicked, setIsAddButtonClicked] = useState<boolean>(false);

  let categoryOfProducts = true;

  return (
    <Container>
      {isAddButtonClicked && <Overlay />}
      <AdminAppHeader />
      {categoryOfProducts ? (
        <Main>
          <MainMenu>
            <button
              className={
                borderProduct
                  ? `${poppins.className} primaryBorder`
                  : poppins.className
              }
              onClick={() => {
                setBorderProduct(true);
                setBorderCategory(false);
              }}
            >
              <span>Produtos</span>
            </button>
            <button
              className={
                borderCategory
                  ? `${poppins.className} primaryBorder`
                  : poppins.className
              }
              onClick={() => {
                setBorderProduct(false);
                setBorderCategory(true);
              }}
            >
              <span>Categorias</span>
            </button>
          </MainMenu>

          <p className={poppins.className}>
            Produtos separados por <span>categoria</span>
          </p>

          <CategoryContainerParent>
            <CategoryContainer>
              <h1 className={bebas_neue.className}>PRATOS A LA CARTE</h1>
              <div>
                <CardFood />
                <CardFood />
                <CardFood />
                <CardFood />
              </div>
            </CategoryContainer>

            <CategoryContainer>
              <h1 className={bebas_neue.className}>PRATOS A LA CARTE</h1>
              <div>
                <CardFood />
                <CardFood />
                <CardFood />
                <CardFood />
              </div>
            </CategoryContainer>
          </CategoryContainerParent>

          <p className={poppins.className}>
            Voce chegou ao fim da lista {<CiFaceSmile size={20} />}
          </p>
        </Main>
      ) : (
        <NotListProductContainer>
          <p className={poppins.className}>
            Voce ainda nao tem nenhuma categoria cadastrada. Comece criando uma
            categoria <span>clicando aqui!</span>
          </p>
        </NotListProductContainer>
      )}

      {isAddButtonClicked ? (
        <AddButtonOptions>
          <div>
            <button className={bebas_neue.className}>CATEGORIA</button>
            <button>
              <Image src="/notebook.png" alt="" height={24} width={24} />
            </button>
          </div>
          <div>
            <button className={bebas_neue.className}>PRODUTO</button>
            <button>
              <Image src="/gift.png" alt="" height={24} width={24} />
            </button>
          </div>

          <button onClick={() => setIsAddButtonClicked(false)}>
            <Image src="/vector.png" alt="" height={28} width={28} />
          </button>
        </AddButtonOptions>
      ) : (
        <AddButton onClick={() => setIsAddButtonClicked(true)}>
          <IoMdAdd size={20} color="white" />
          <span className={bebas_neue.className}>CADASTRO</span>
        </AddButton>
      )}
    </Container>
  );
}
