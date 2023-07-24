'use client'

import { ReactNode } from "react";
import { useRouter } from 'next/navigation';

import { bebas_neue } from "../../fonts"



export default function LoginLayout({children}: {children: ReactNode}) 
{


  return (
    <html lang="en" className={bebas_neue.className} >
      <body >   
          {children}
      </body>
    </html>
  )
}
