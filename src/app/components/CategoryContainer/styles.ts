import { styled } from '@linaria/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
`;

export const SelectCategorySection = styled.section`
  width: 100%;

  > h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  > div {
    width: 100%;
    display: flex;
    gap: 2.6rem;
  }
`;

export const CardFoodContainer = styled.div`
  width: 15.7rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  justify-content: center;

  img {
    height: 15.7rem;
    width: 15.7rem;
  }

  h2 {
    font-weight: 500;
    line-height: normal;
    font-size: 14px;
    font-style: normal;
    color: ${({ theme }) => theme.COLORS.DARK};
    margin-left: 1rem;
  }

  span {
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    margin-left: 1rem;
  }
`;

export const NotImageContainer = styled.div`
  height: 15.7rem;
  width: 15.7rem;
  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
