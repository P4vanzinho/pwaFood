'use client';
import { Container, Overlay } from './styles';
import AdminAppHeader from '@/app/components/AdminAppHeader';
import RegistrationsContainer from '@/app/components/RegistrationsContainer';
import RegistrationButton from '@/app/components/RegistrationButton';
import PageProductsContent from '@/app/components/PageProductsContent';

import { bebas_neue } from '@/app/fonts';

import Image from 'next/image';
import { IoMdAdd } from 'react-icons/io';
import { useState } from 'react';

import { useSession } from 'next-auth/react';

export default function Products() {
  const { data: session } = useSession();
  const [isAddButtonClicked, setIsAddButtonClicked] = useState<boolean>(false);

  const businessId = session?.data.business[0].id;

  return (
    <Container>
      <AdminAppHeader />
      {isAddButtonClicked && <Overlay />}

      {businessId && <PageProductsContent businessId={businessId} />}

      {isAddButtonClicked ? (
        <RegistrationsContainer>
          <button onClick={() => setIsAddButtonClicked(false)}>
            <Image src="/vector.png" alt="" height={28} width={28} />
          </button>
        </RegistrationsContainer>
      ) : (
        <RegistrationButton>
          <button onClick={() => setIsAddButtonClicked(true)}>
            <IoMdAdd size={20} color="white" />
            <span className={bebas_neue.className}>CADASTRO</span>
          </button>
        </RegistrationButton>
      )}
    </Container>
  );
}
