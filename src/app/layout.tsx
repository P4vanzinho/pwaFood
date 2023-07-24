'use client'

import { ReactNode } from "react";
import { useRouter } from 'next/navigation';
import { AppRoutes } from "./routes/AppRoutes";
import { useEffect } from "react";

import StyledComponentsRegistry from '../lib/registry';

import { bebas_neue } from "./fonts";



export default function RootLayout({children}: {children: ReactNode}) 
{

  const { push } =useRouter();

  // useEffect(()=>{
  //   push(AppRoutes.public.login)
  // },[])

  /** usuário autenticado=> permissão para visualizar rota privada,
   * e o contrário também é valido
  */

  return (
    <html lang="en" className={bebas_neue.className}>
      <body>
        <StyledComponentsRegistry>   
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
