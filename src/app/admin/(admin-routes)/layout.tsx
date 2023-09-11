import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';
import { authOptions } from '@/app/api/auth/authOptions';
import { redirect } from 'next/navigation';

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  return <>{children}</>;
}
