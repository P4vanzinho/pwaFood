import { styled } from '@linaria/react';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 200px;
  gap: 80px;
  align-items: center;
  background-color: white;
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
  }

  > img {
    margin-top: 15px;
  }
`;

export const InfoUser = styled.div`
  height: 100%;
  display: flex;
  margin-left: 80px;
  justify-content: end;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;

export const RightMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;

  > div {
    width: auto !important;
  }
`;
