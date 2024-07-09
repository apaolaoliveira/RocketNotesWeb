import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';

export function Home(){
  return (
    <Container>
      <Brand><h1>Rocket Notes</h1></Brand>
      <Header />

      <Menu>
        <Search />
      </Menu>

      <Content>
      </Content>

      <NewNote />
    </Container>
  )
}