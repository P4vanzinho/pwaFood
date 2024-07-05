import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import Link from "next/link";

type StatusContainerProps = {
  isCurrentStatus: boolean;
};
type ConditionalBorderImageContainer = {
  isCurrentStatus?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  gap: 1.625rem;
  max-height: calc(100vh - 16rem);
`;

export const StatusAndDeliveryDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 14px;
`;

export const AllStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatusContainer = styled.div<StatusContainerProps>`
  display: flex;
  gap: 26px;

  > span {
    margin: auto 0;
    font-size: 14px;
    color: ${(props) =>
      props.isCurrentStatus ? theme.COLORS.DARK : theme.COLORS.GRAY};
  }
  font-weight: ${(props) => (props.isCurrentStatus ? "bold" : "normal")};
`;

export const ConditionalBorderImageContainer = styled.div<ConditionalBorderImageContainer>`
  border-radius: 50%;
  border: ${(props) =>
    props.isCurrentStatus ? `1px solid ${theme.COLORS.DARK}` : "none"};

  margin-top: ${(props) => (props.isCurrentStatus ? "12px" : "0")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  > div {
    border: ${(props) =>
      props.isCurrentStatus
        ? `2px solid ${theme.COLORS.DARK}`
        : `2px solid ${theme.COLORS.GRAY}`};

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    height: 24px;
    width: 24px;
  }
`;

export const VerticalSeparator = styled.div`
  width: 2px;
  height: 26px;
  background-color: ${theme.COLORS.GRAY};
  margin-left: 24px;
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-end;
  position: fixed;
  bottom: 80px;
  left: 0;
  padding: 1rem;
  background-color: #f8fbff;
`;
