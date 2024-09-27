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
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagsSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) 
      setTagsSelected(prevState => prevState.filter(t => t !== tagName));
    else 
      setTagsSelected(prevState => [...prevState, tagName]);
  }

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
        <li>
          <ButtonText 
            title="All notes" 
            onClick={() => handleTagsSelected("All notes")}
            isActive={tagsSelected.length === 0}
          />
        </li>

        { tags && tags.map(tag =>{
            <li key={String(tag.id)}>
              <ButtonText 
                title={tag.name}
                onClick={() => handleTagsSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
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