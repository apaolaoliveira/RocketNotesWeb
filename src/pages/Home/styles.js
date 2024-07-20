import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  padding: 6.4rem 6.4rem 0;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 3.2rem 6.4rem;
  overflow-y: auto;
`;

export const NewNote = styled(Link)`
  grid-area: newNote;

  background-color: ${({theme }) => theme.COLORS.ORANGE};
  color: ${({theme }) => theme.COLORS.BACKGROUND_900};
  
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: .8rem;
  }
`;
