import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 6.4rem 0;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 1.2rem;
    display: flex;
    align-items: center;

    a {
      margin-left: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div button {
    background: transparent;
    border: none;

    > svg {
      fill: ${({ theme }) => theme.COLORS.ORANGE};
      cursor: pointer;
      font-size: 2rem;
    }
  }
  
  > h1 {
    font-size: 3.6rem;
    padding-top: 2.8rem;
    font-weight: 500;
  }

  > p {
    font-size: 1.6rem;
    margin: 2.8rem 0;
    text-align: justify;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    padding: 2rem 3rem;
    border-radius: 8px;
    text-align: center;
    position: relative;

    header {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;

        h2 {
          font-size: 2.4rem;
          margin: 1.6rem 0;
        }

        p {
          font-size: 1.8rem;
          margin-bottom: 1.6rem;
        }
      }

      button {
        background: transparent;
        border: none;
        position: absolute;
        color: ${({theme}) => theme.COLORS.WHITE};
        right: 1rem;
        font-size: 2.5rem;

        svg {
          color: ${({theme}) => theme.COLORS.ORANGE};
        }
      }
    }
  }

  button {
    margin: 0 1rem;
  }
`;