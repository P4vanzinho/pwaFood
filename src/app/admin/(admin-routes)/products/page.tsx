'use client';
import {
  Container,
  ContentContainer,
  NotListProductContainer,
  Main,
} from './styles';
import AdminAppHeader from '@/app/components/AdminAppHeader';
import { poppins, inter, bebas_neue } from '@/app/fonts';

export default function Products() {
  let categoryOfProducts = true;

  return (
    <Container>
      <AdminAppHeader />
      {categoryOfProducts ? (
        <Main>oi</Main>
      ) : (
        <NotListProductContainer>
          <p className={poppins.className}>
            Voce ainda nao tem nenhuma categoria cadastrada. Comece criando uma
            categoria <span>clicando aqui!</span>
          </p>
        </NotListProductContainer>
      )}
    </Container>
  );
}
