import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import Image from "next/image";

export const Container = styled.div`
  height: auto;
  width: 130px;
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
    justify-content: space-between;

    height: 6rem;

    > p {
      margin: 0.625rem;
      display: inline-block;
      width: 100%;
    }

    > span {
      display: flex;
      margin: 0px 0.625rem 0.625rem;

      width: 100%;
    }
  }
`;

export const PhotoFood = styled(Image)`
  object-fit: cover;
  border-radius: 10px;

  -webkit-box-shadow: 2px 0px 15px -2px rgba(0, 0, 0, 0.03);
  box-shadow: 2px 0px 15px -2px rgba(0, 0, 0, 0.03);
`;
