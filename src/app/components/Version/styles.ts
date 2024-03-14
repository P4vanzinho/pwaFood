import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import { lighten } from "polished";

export const Container = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;

  > span {
    color: ${() => lighten(0.5, theme.COLORS.DARK)};
    font-size: 0.6rem;
    font-weight: lighter;
  }
`;
