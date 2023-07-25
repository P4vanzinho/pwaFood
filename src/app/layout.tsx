'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import StyledComponentsRegistry from '../lib/registry';

import { bebas_neue } from './fonts';

import { createGlobalStyle } from 'styled-components';

import { Metadata } from 'next';

import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';

export const metadata: Metadata = {
  title: ' dsdsdsdE-FOOD',
  description: 'A deliveryFood connected if',
};

const GlobalStyle = createGlobalStyle`

  :root{
    font-size: 62.5%;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  body{
    width: 100%;
    overflow-x: hidden;

    a{
      cursor: pointer;
      text-decoration: none;
    }

    button{
      cursor: pointer;
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </ThemeProvider>
    </html>
  );
}
