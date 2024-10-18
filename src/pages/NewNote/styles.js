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
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 3.8rem auto;

  > header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    

    margin-bottom: 3.6rem;

    button {
      font-size: 2rem;
      color: ${({theme}) => theme.COLORS.ORANGE};
      background-color: transparent;
      border: none;
      width: max-content;
    }
  }
`;