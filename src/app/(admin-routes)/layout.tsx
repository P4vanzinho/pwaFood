import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';
import { nextAuthOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  /*getServerSession: colocar a constante criado com NextAuthOptions do next-auth, assim consigo usar
  a Session em server component, assim como é useSession no client component.*/

  if (!session) {
    redirect('/auth/login');
  }

  return <>{children}</>;
}
