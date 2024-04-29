import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import Image from "next/image";

export const Container = styled.div`
  height: auto;
  width: 10rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme.COLORS.WHITE};
  border-radius: 10px;
  -webkit-box-shadow: 0px 4px 15px -2px rgba(0, 0, 0, 0.03);
  box-shadow: 0px 4px 15px -2px rgba(0, 0, 0, 0.03);
  word-break: break-word;
  word-wrap: break-word;
  white-space: normal;
  cursor: pointer;
  transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 250ms;

  &:hover {
    transform: scale(1.05);
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 0 10px 16px;
    justify-content: space-between;
    gap: 10px;
    flex: 1;
  }
`;

export const PhotoFood = styled(Image)`
  object-fit: cover;
  border-radius: 10px;

  -webkit-box-shadow: 2px 0px 15px -2px rgba(0, 0, 0, 0.03);
  box-shadow: 2px 0px 15px -2px rgba(0, 0, 0, 0.03);
`;

export const Foodname = styled.span`
  color: ${theme.COLORS.DARK};
  font-size: 0.875em;
  font-weight: 600;
  margin-top: 10px;
`;

export const PriceAndLikeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  align-items: center;
`;
