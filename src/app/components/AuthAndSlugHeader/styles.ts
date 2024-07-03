import { styled } from "@linaria/react";
import { theme } from "@/app/styles/theme";

export const Container = styled.header`
  padding: 30px 1.25rem 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
`;

export const InputSearchContainer = styled.div`
  width: 80%;
  height: 2.5rem;
  background-color: ${theme.COLORS.WHITE};
  border-radius: 15px;
  margin-left: 7%;
  position: relative;
  padding-right: 0.62rem;
  display: flex;
  align-items: center;
  > input {
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    background-color: transparent;
    border: none;
    color: ${theme.COLORS.DARK};
  }

  input::placeholder {
    opacity: 0.5;
  }

  input:focus {
    outline: none;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

export const SearchAndLogoContainer = styled.div`
  background-color: ${theme.COLORS.WHITE};
  border: none;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;

  img {
    object-fit: cover;
  }
`;

export const BackButton = styled.button`
  background-color: transparent;
  border: none;

  img {
    object-fit: cover;
  }
`;

export const SlugNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    font-size: 0.875rem;
  }

  > span:nth-of-type(2) {
    color: ${theme.COLORS.PRIMARY};
    text-align: center;
  }
`;
