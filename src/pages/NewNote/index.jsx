import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function NewNote(){
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink]);
    setNewLink('');
  }

  function handleDeleteLink(deletedLink){
    setLinks(prevState => prevState.filter((link) => link !== deletedLink));
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  return ( 
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>New Note</h1>
            <Link to="/">Back</Link>
          </header>
          <Input type="text" placeholder="Title" />
          <TextArea placeholder="Write your note here..." />

          <Section title="Useful links">
            {
              links.map((link, index) => (
                <NoteItem 
                  key={String(index)} 
                  value={link} 
                  onClick={() => handleDeleteLink(link)}
                />
              ))
            }
            <NoteItem 
              isNew 
              placeholder="New link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Tags">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)} 
                    value={tag} 
                    onClick={() => {}}
                  />
                ))
              }
              <NoteItem 
                isNew 
                placeholder="New tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Save"/>
        </Form>
      </main>
    </Container>
  )
}