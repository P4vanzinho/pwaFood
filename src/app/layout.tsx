'use client';

import { ReactNode } from 'react';

import { bebas_neue } from './fonts';

import NextAuthSessionProvider from './providers/SessionProvider';
import { ToastContainer } from 'react-toastify';
import '../assets/ReactToastify.css';
import { css } from '@linaria/core';
import { LoadingContextProvider } from '@/context/loading';
import FullScreenLoading from './components/FullScreenLoading';

const globalStyle = css`
  :root {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    max-height: none;
    margin: 0;
    padding: 0;

    > a {
      cursor: pointer;
      text-decoration: none;
    }

    > button {
      cursor: pointer;
    }

    > h2 {
      font-size: 16rem;
    }
  }
`;

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={globalStyle}>
      <body>
        <LoadingContextProvider>
          <FullScreenLoading>
            <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
            <ToastContainer className={bebas_neue.className} />
          </FullScreenLoading>
        </LoadingContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;
