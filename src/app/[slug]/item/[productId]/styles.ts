import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 30px;
  padding: 0 40px;
  flex: 1;

  margin-top: 100px;
  margin-bottom: 70px;
  img {
    max-width: 1024px;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const QtyInputContainer = styled.div``;

export const Content = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    text-align: center;
  }
`;

export const TitleAndDescriptionContainer = styled.div`
  gap: 26px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  z-index: 1;
  margin-bottom: 100px;

  padding: 10px;
  border-radius: 8px;
  position: relative;

  > div:nth-of-type(1) {
    position: sticky;
    top: 0;
    left: 50%;
  }

  > div:nth-of-type(2) {
    max-height: 100px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.COLORS.PRIMARY};
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${theme.COLORS.LIGHT};
      border-radius: 8px;
    }
  }
  /* Estilização da barra de rolagem */
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-end;
  position: fixed;
  bottom: 70px;
  z-index: 1;
  left: 0;
  padding: 0 40px;
  background-color: ${theme.COLORS.LIGHT};
`;

export const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 16px;
    color: ${theme.COLORS.DARK};
  }

  span:nth-of-type(2) {
    font-weight: 600;
  }
`;
