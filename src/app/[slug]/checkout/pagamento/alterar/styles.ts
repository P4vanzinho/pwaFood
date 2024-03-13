import { theme } from '@/app/styles/theme';
import { styled } from '@linaria/react';
import Link from 'next/link';
import { lighten } from 'polished';

export const ChangeLink = styled(Link)`
  color: ${theme.COLORS.WARNING};
  font-size: 1.063rem;
`;

export const Container = styled.div`
  > label {
    color: ${theme.COLORS.DARK};
    font-size: 0.75rem;
  }

  & > div {
    overflow: auto;
    height: 90%;
    padding-bottom: 170px;
  }

  & > footer {
    padding: 0px 1rem;
    position: fixed;
    width: 100%;
    max-width: 1200px;
    height: 4rem;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
  }
`;

export const RadioGroup = styled.div`
  margin-top: 40px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > label {
      font-size: 1.063rem;
    }
  }

  & > section {
    margin-top: 15px;
    font-size: 1.063rem;
    width: 100%;
    background-color: ${theme.COLORS.WHITE};
    padding: 25px;
    border-radius: 20px;

    & > div {
      padding-bottom: 15px;
      border-color: ${() => lighten(0.25, theme.COLORS.GRAY)};
      border-style: solid;
      border-width: 1px;
      border-right: none;
      border-left: none;
      border-top: none;

      &:nth-of-type(n + 2) {
        margin-top: 15px;
      }

      &:nth-last-of-type(1) {
        border: none;
        padding-bottom: 0px;
      }
    }
  }
`;
