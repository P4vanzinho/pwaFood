'use client'

import { ReactNode } from "react";
import { useRouter } from 'next/navigation';

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" >
      <body >
        {children}
      </body>
    </html>
  )
}
