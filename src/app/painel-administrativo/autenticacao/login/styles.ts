import { styled } from '@linaria/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FieldsetLogin = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: none;
  padding: 0px;
  margin: 0px;
`;

export const ForgetPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 400;

    > a {
      margin-left: 5px;
      font-size: 0.875rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
    }
  }
`;

export const AlertSpan = styled.span`
  font-size: 12px;
`;

export const Or = styled.div`
  margin: 20px 0px;

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.GRAY};

  > span {
    margin: 0px 10px;
    font-size: 0.875rem;
  }

  > div {
    width: 100%;
    min-height: 1px;
    height: 1px;
    background: ${({ theme }) => theme.COLORS.GRAY};
  }
`;
