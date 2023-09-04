'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Home() {
  const router = useRouter();

  router.push('/admin/login');

  return <></>;
}
