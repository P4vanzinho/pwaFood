import { theme } from '@/app/styles/theme';
import { styled } from '@linaria/react';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

type ToogleSwitchProps = {
  switched?: boolean;
};

export const ToggleSwitch = styled.div<ToogleSwitchProps>`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: 6rem;
  position: relative;

  > p {
    color: ${({ switched }) =>
      !!switched ? theme.COLORS.DARK : theme.COLORS.GRAY};
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
  }
`;

export const LabelToglleSwitch = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const InputCheckBoxInToggle = styled.input`
  opacity: 0;
  position: absolute;
`;

export const Switch = styled.div`
  position: relative;
  width: 4.5rem;
  height: 1.8rem;
  background: #b3b3b3;
  border-radius: 32px;

  &:before {
    content: '';
    position: absolute;
    width: 23px;
    height: 23px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translateY(-50%);
    transition: left 0.2s ease-in-out;
    filter: drop-shadow(-2px 1px 6px rgba(0, 0, 0, 0.25));
  }

  /* ${InputCheckBoxInToggle} Isso permite que você use o componente Input como um seletor CSS sem precisar saber qual é o nome da classe gerado pelo styled-components.*/
  /*seleciona apenas os elementos input do tipo checkbox ou radio que estão marcados (ou seja, quando o botão switch é clicado).*/
  ${InputCheckBoxInToggle}:checked + & {
    background-color: ${() => theme.COLORS.PRIMARY_DARK};

    &:before {
      left: calc(100% - (23px + 4px));
    }
  }
`;
