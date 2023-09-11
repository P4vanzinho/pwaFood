'use client';

import AdminAppHeader from '@/app/components/AdminAppHeader';
import {
  Container,
  Main,
  ToggleSwitch,
  ToggleSwitchContainer,
  Label,
  Input,
  Switch,
  ButtonsContainer,
} from './styles';
import { poppins, bebas_neue } from '@/app/fonts';
import { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import useFoodFetch from '@/app/hooks/useFoodFetch';
import { useSession } from 'next-auth/react';
import { EndpointFoodApiEnum } from '@/app/enums';

export default function NewCategory() {
  const [checked, setChecked] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>('');
  const { data: session } = useSession();
  const router = useRouter();

  const businessID = session?.data?.business[0]?.id;

  const { request: requestRegisterCategory, error, message } = useFoodFetch();

  function handleCategory() {
    requestRegisterCategory({
      method: 'POST',
      body: {
        businessId: businessID,
        name: categoryName,
        enabled: checked,
      },
      endPoint: EndpointFoodApiEnum.PRODUCT_CATEGORY,
    });
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  return (
    <Container onSubmit={handleSubmit}>
      <AdminAppHeader />;
      <Main>
        <h1 className={bebas_neue.className}>
          CADASTRO DE CATEGORIA DE PRODUTO
        </h1>
        <label htmlFor="title" className={bebas_neue.className}>
          Titulo
          <input
            id="title"
            className={poppins.className}
            type="text"
            placeholder="De um titulo a sua categoria"
            onChange={e => setCategoryName(e.target.value)}
            value={categoryName}
          />
        </label>

        <ToggleSwitchContainer>
          <ToggleSwitch>
            <p className={poppins.className}>Exibir a categoria no cardapio</p>
            <Label>
              <Input type="checkbox" onChange={() => setChecked(!checked)} />
              <Switch />
            </Label>
          </ToggleSwitch>
        </ToggleSwitchContainer>

        <ButtonsContainer>
          <button
            onClick={() => router.push('/admin/produtos')}
            className={poppins.className}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className={poppins.className}
            onClick={handleCategory}
          >
            Salvar
          </button>
        </ButtonsContainer>
      </Main>
    </Container>
  );
}
