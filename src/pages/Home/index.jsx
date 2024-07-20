import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

export function Home(){
  return (
    <Container>
      <Brand><h1>Rocket Notes</h1></Brand>
      <Header />

      <Menu>
        <li><ButtonText title="All" isActive/></li>
        <li><ButtonText title="Node" /></li>
        <li><ButtonText title="React" /></li>
      </Menu>

      <Search>
        <Input placeholder="Search by title" />
      </Search>

      <Content>
        <Section title='My notes'>
          <Note data={{title: 'react', tags: [{id: 1, name:'node'}, {id:2, name:'express'}]}}/>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        New Note
      </NewNote>
    </Container>
  )
}