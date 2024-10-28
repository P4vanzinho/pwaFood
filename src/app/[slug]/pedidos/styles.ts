import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import { darken } from "polished";

interface StatusSpanProps {
  status: "finalizado" | "cancelado" | "enviado" | string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  height: calc(100vh - 13.25rem);
  gap: 1.625rem;
`;

export const TitleContainer = styled.div``;

export const RequestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  overflow-y: auto;

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.COLORS.PRIMARY};
    border-radius: 4px;
  }
`;

export const RequestCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.688rem 1.375rem 1.25rem;
  background-color: ${theme.COLORS.WHITE};
  border-radius: 0.625rem;
`;

export const CardHeader = styled.div`
  display: flex;
  position: relative;
  gap: 9px;
  align-items: center;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid ${theme.COLORS.GRAY};
  font-weight: 600;
`;

export const MenuRequestCard = styled.div`
  position: absolute;
  top: -5px;
  right: 15px;
`;

export const ContentRequestCard = styled.div`
  display: flex;
  padding-top: 0.688rem;
  flex-direction: column;
  gap: 0.625rem;

  > span:nth-of-type(1) {
    color: ${theme.COLORS.GRAY};
  }

  div {
    display: flex;
    justify-content: space-between;

    > span:nth-of-type(1) {
      font-size: 1.25rem;
    }
  }
`;
export const StatusSpan = styled.span<StatusSpanProps>`
  color: ${({ status }) => {
    switch (status) {
      case "finalizado":
        return theme.COLORS.SUCCESS;
      case "cancelado":
        return theme.COLORS.ERROR;
      case "enviado":
        return theme.COLORS.DARK;
      default:
        return theme.COLORS.GRAY;
    }
  }};
`;
