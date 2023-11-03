import { ReactNode, useEffect } from 'react';
import AdminAppHeader from '@/app/components/AdminAppHeader';

interface PrivateLayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <>
      <AdminAppHeader />
      {children}
    </>
  );
}
