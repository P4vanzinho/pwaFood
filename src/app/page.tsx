'use client';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.replace('/admin/login');
  }
  return <></>;
}
