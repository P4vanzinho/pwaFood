import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  width: 157px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  object-fit: cover;
  border-radius: 10px;
  -webkit-box-shadow: 0px 4px 15px -2px rgba(0, 0, 0, 0.03);
  box-shadow: 0px 4px 15px -2px rgba(0, 0, 0, 0.03);
  word-break: break-word;
  word-wrap: break-word;
  white-space: normal;

  p {
    margin: 0.625rem;
    display: inline-block;
    width: 100%;
  }

  span {
    margin: 0px 0.625rem 0.625rem;
  }
`;

export const PhotoFood = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
  -webkit-box-shadow: 2px 0px 15px -2px rgba(0, 0, 0, 0.03);
  box-shadow: 2px 0px 15px -2px rgba(0, 0, 0, 0.03);
`;
