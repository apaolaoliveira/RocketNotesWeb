import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home(){
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get('/tags');
      setTags(response.data);
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand><h1>Rocket Notes</h1></Brand>
      <Header />

      <Menu>
        { tags && tags.map(tag =>{
            <li key={String(tag.id)}>
              <ButtonText title={tag.name}/>
            </li>
          })
        }
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