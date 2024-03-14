"use client";

import { ReactNode } from "react";
import { bebasNeue } from "./fonts";
import NextAuthSessionProvider from "./providers/SessionProvider";
import { ToastContainer } from "react-toastify";
import "../assets/ReactToastify.css";
import { css } from "@linaria/core";
import { LoadingContextProvider } from "@/context/loading";
import FullScreenLoading from "./components/FullScreenLoading";

const globalStyle = css`
  :root {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button,
  a {
    cursor: pointer;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    max-height: none;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button,
    span,
    strong {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  @keyframes scrollUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes scrollDown {
    0% {
      opacity: 0;
      transform: translateY(-80px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
      /**/
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
      /**/
    }
  }

  @keyframes bubbleNotification {
    0% {
      opacity: 0;
      transform: scale(0.9);
      /*transform: translateY(-50px) ;*/
    }

    100% {
      opacity: 1;
      transform: scale(1);
      /*transform: translateY(0px) ;*/
    }
  }

  @keyframes bubbleStorie {
    0% {
      opacity: 0;
      transform: scale(0.1);
      /*transform: translateY(-50px) ;*/
    }

    100% {
      opacity: 1;
      transform: scale(1);
      /*transform: translateY(0px) ;*/
    }
  }

  @keyframes likedAnimation {
    0% {
      opacity: 1;

      transform: scale(0.1);
      /*transform: translateY(-50px) ;*/
    }
    50% {
      opacity: 1;

      transform: scale(1);
      /*transform: translateY(-50px) ;*/
    }
    70% {
      opacity: 1;

      transform: scale(0.8);
      /*transform: translateY(-50px) ;*/
    }
    100% {
      transform: scale(1);
      /*transform: translateY(0px) ;*/
    }
  }

  @keyframes dislikedAnimation {
    0% {
      opacity: 0;

      transform: scale(1);
      /*transform: translateY(-50px) ;*/
    }
    50% {
      opacity: 1;

      transform: scale(0.8);
      /*transform: translateY(-50px) ;*/
    }
    100% {
      opacity: 1;
      transform: scale(1);
      /*transform: translateY(0px) ;*/
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
            <ToastContainer className={bebasNeue.className} />
          </FullScreenLoading>
        </LoadingContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;
