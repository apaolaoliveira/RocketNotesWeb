import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 2.4rem;
    margin-bottom: 2.4rem;
    margin-top: 8.4rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 3rem;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }
`;