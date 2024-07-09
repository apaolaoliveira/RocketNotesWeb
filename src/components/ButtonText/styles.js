import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  color: ${({ theme, $isactive }) => $isactive? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  font-size: 1.6rem;
`;