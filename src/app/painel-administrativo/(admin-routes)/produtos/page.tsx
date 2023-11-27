'use client';

import { Container } from './styles';
import { useSession } from 'next-auth/react';
import CategoryList from '@/app/components/CategoryList';

export default function Products() {
  const { data: session } = useSession();
  const businessId = session?.data.business[0].id;

  return (
    <Container>
      {!!businessId && <CategoryList businessId={businessId} mode="private" />}
    </Container>
  );
}
