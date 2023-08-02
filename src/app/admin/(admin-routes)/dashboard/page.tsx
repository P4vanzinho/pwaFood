import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';
import { nextAuthOptions } from '../../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import AuthHeader from '@/app/components/AuthHeader';

export default function Dashboard() {
  return (
    <div>
      <AuthHeader />
    </div>
  );
}
