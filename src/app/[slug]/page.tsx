'use client';

import CategoryList from '../components/CategoryList';
import Text from '../components/Text';
import useFoodFetch from '../hooks/useFoodFetch';
import { FoodApiBusiness } from '../../../types/foodApi';
import { EndpointFoodApiEnum } from '../enums';
import Image from 'next/image';
import { poppins } from '../fonts';
import { theme } from '../styles/theme';
import { styled } from '@linaria/react';
import { getPublicUser } from '@/utils/cookiePublicUser';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;

  > header {
    margin: 10px 0px 20px 5px;
    display: flex;
    align-items: center;

    > p {
      font-size: 0.75rem;
      color: ${theme.COLORS.ERROR};
      font-weight: 600;
      margin-left: 2px;
    }

    > img {
      width: 1.563rem;
      height: 1.563rem;
      border-radius: 5px;
    }

    > span {
      margin-left: 5px;
      font-size: 0.75rem;
      color: ${theme.COLORS.GRAY};
      font-weight: 600;
    }
  }

  > div {
    margin: 10px 0px 20px;

    p {
      margin-left: 5px;
    }

    span {
      color: ${theme.COLORS.PRIMARY};
    }
  }
`;

type HomeProps = {
  params: {
    slug: string;
  };
};

export default function Home(props: HomeProps) {
  const user = getPublicUser();

  const { data } = useFoodFetch<FoodApiBusiness>(
    `${EndpointFoodApiEnum.BUSINESS}/${props.params.slug}`,
  );

  return (
    <Container>
      <header>
        {!!data?.upload?.url && (
          <Image
            src={data?.upload?.url}
            width={30}
            height={30}
            alt={`${data?.name}_logo`}
          ></Image>
        )}

        {!!data?.name && (
          <>
            <span className={poppins.className}>{data.name.toUpperCase()}</span>
          </>
        )}

        <p className={poppins.className}>
          {data?.status === 'close' ? '(FECHADO)' : ''}
        </p>
      </header>

      <div>
        <Text>
          Olá
          {!!user?.name && (
            <>
              ,<span> {user?.name}!</span>
            </>
          )}
        </Text>
      </div>
      <CategoryList businessId={props.params.slug} />
    </Container>
  );
}
