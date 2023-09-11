'use client';

import { Container } from './styles';
import { useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { bebas_neue } from '@/app/fonts';
import Image from 'next/image';

interface Props {
  children: ReactNode;
  showSidebar: () => void;
}

export default function RegistrationsContainer({
  children,
  showSidebar,
}: Props) {
  const router = useRouter();

  return (
    <Container>
      <div>
        <button
          onClick={() => router.push('/admin/novacategoria')}
          className={bebas_neue.className}
        >
          CATEGORIA
        </button>
        <button>
          <Image src="/notebook.png" alt="" height={24} width={24} />
        </button>
      </div>
      <div>
        <button onClick={showSidebar} className={bebas_neue.className}>
          PRODUTO
        </button>
        <button>
          <Image src="/gift.png" alt="" height={24} width={24} />
        </button>
      </div>

      {children}
    </Container>
  );
}
