'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import StyledComponentsRegistry from '../lib/registry';

import { bebas_neue } from './fonts';

import { createGlobalStyle } from 'styled-components';

import { Metadata } from 'next';

export const metadata = {
  title: ' dsdsdsdE-FOOD',
  description: 'A deliveryFood connected if',
};

const GlobalStyle = createGlobalStyle`

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

`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bebas_neue.className}>
      <GlobalStyle />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
