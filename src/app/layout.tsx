'use client';

import { ReactNode } from 'react';

import StyledComponentsRegistry from '../lib/registry';

import { bebas_neue } from './fonts';

import { createGlobalStyle } from 'styled-components';

import { Metadata } from 'next';

import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';

import NextAuthSessionProvider from './providers/SessionProvider';
import { ToastContainer } from 'react-toastify';
import '../assets/ReactToastify.css';

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

    max-height: none;
    min-height: 100vh;

    a{
      cursor: pointer;
      text-decoration: none;
    }

    button{
      cursor: pointer;
    }
  }

`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>
          <StyledComponentsRegistry>
            <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
          </StyledComponentsRegistry>
          <ToastContainer className={bebas_neue.className} />
        </body>
      </ThemeProvider>
    </html>
  );
}
