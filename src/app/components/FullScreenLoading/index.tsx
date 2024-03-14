"use client";

import { ReactNode, useEffect } from "react";
import Modal from "../Modal";
import { Content } from "./styles";
import { useLoadingContext } from "@/context/loading";
import LoadingIndicator from "../LoadingIndicator";

type FullScreenLoadingProps = {
  children: ReactNode;
};

export default function FullScreenLoading({
  children,
}: FullScreenLoadingProps) {
  const { loading } = useLoadingContext();

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "unset";
  }, [loading]);

  return (
    <>
      {children}
      {loading && (
        <Content>
          <Modal>
            <LoadingIndicator />
          </Modal>
        </Content>
      )}
    </>
  );
}
