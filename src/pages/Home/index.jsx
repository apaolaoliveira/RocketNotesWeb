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

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  function handleTagsSelected(tagName) {
    if(tagName == 'All notes') return setTagsSelected([]);
    
    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }
  }

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get('/tags');
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Brand><h1>Rocket Notes</h1></Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText 
            title="All notes" 
            onClick={() => handleTagsSelected("All notes")}
            $isActive={tagsSelected.length === 0}
          />
        </li>

        {tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText 
                title={tag.name}
                onClick={() => handleTagsSelected(tag.name)}
                $isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input 
          placeholder="Search by title" 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </Search>

      <Content>
        <Section title='My notes'>
          {notes.map(note => (
            <Note 
              key={String(note.id)}
              data={note}
            />
          ))
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        New Note
      </NewNote>
    </Container>
  )
}