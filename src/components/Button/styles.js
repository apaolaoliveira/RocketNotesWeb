import styled, { css } from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
  transition: opacity 0.3s;

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      pointer-events: none;
      opacity: 0.8;
    `}
`;