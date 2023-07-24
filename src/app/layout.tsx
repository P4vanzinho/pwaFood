'use client'

import { ReactNode } from "react";
import { useRouter } from 'next/navigation';


import StyledComponentsRegistry from '../lib/registry';

import { bebas_neue } from "./fonts";

import { createGlobalStyle } from "styled-components";



export default function RootLayout({ children }: { children: ReactNode }) {

  const { push } = useRouter();

  const GlobalStyle=createGlobalStyle`

    :root{
      font-size: 62.5%;
    }

    body{
      box-sizing: border-box;
      margin: 0;
      padding: 0;

      a{
        cursor: pointer;
        text-decoration: none;
      }
    }

`

  return (
    <html lang="en" className={bebas_neue.className}>

    <GlobalStyle/>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
