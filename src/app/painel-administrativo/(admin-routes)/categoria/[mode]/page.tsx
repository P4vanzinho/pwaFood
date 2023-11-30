'use client';

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
import { EndpointFoodApiEnum, RoutesEnum } from '@/app/enums';
import Title from '@/app/components/Title';
import Button from '@/app/components/Button';

type CategoryProps = {
  params: {
    mode: 'cadastro' | 'edicao';
  };
};

export default function Category({ params }: CategoryProps) {
  console.log(params);

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

  const title =
    params.mode === 'cadastro'
      ? 'CADASTRO DE CATEGORIA DE PRODUTO'
      : 'EDIÇÃO DA CATEGORIA DE PRODUTO';

  return (
    <Container onSubmit={handleSubmit}>
      <Main>
        <Title>{title}</Title>

        <label htmlFor="title" className={bebas_neue.className}>
          Título
          <input
            id="title"
            className={poppins.className}
            type="text"
            placeholder="Dê um título à categoria"
            onChange={e => setCategoryName(e.target.value)}
            value={categoryName}
          />
        </label>

        <ToggleSwitchContainer>
          <ToggleSwitch>
            <p className={poppins.className}>Exibir categoria no cardápio</p>
            <Label>
              <Input type="checkbox" onChange={() => setChecked(!checked)} />
              <Switch />
            </Label>
          </ToggleSwitch>
        </ToggleSwitchContainer>

        <ButtonsContainer>
          <Button
            onClick={() => router.back()}
            className={poppins.className}
            text="Cancelar"
          />

          <Button type="submit" className={poppins.className} text="Salvar" />
        </ButtonsContainer>
      </Main>
    </Container>
  );
}
