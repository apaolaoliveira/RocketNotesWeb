import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
  'brand header'
  'menu search'
  'menu content'
  'newNote content';

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: .1rem solid ${({theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 2.4rem;
    color: ${({theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 6.4rem;
  text-align: center;

  > li {
    margin-bottom: 2.4rem;
  }
`;

export const Search = styled.div`
  grid-area: search;
`;

export const Content = styled.div`
  grid-area: content;
`;

export const NewNote = styled.button`
  grid-area: newNote;

  background-color: ${({theme }) => theme.COLORS.ORANGE};
  border: none;
  
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: .8rem;
  }
`;
