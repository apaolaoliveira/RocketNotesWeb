import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';
import { ButtonText } from '../../components/ButtonText';

export function NewNote(){
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

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

  function handleDeleteTag(deletedTag){
    setTags(prevState => prevState.filter((tag) => tag !== deletedTag));
    setNewTag('');
  }

  async function handleNewNote(){
    if(!title) return alert('The title is required');
    if(newLink) return alert('It looks like you forgot to add one link!');
    if(newTag) return alert('It looks like you forgot to add one tag!');

    const allLinksValid = links.every(link => link.startsWith('http://') || link.startsWith('https://'));
    if (!allLinksValid) return alert('Please make sure all links start with http:// or https://');
    
    await api.post('/notes', {
      title,
      description,
      links,
      tags
    });

    alert('New note added successfully');
    navigate(-1);
  }

  return ( 
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>New Note</h1>
            <ButtonText onClick={() => navigate(-1)} title="Back" />
          </header>
          <Input 
            type="text" 
            placeholder="Title" 
            onChange={e => setTitle(e.target.value)}            
          />

          <TextArea 
            placeholder="Write your note here..." 
            onChange={e => setDescription(e.target.value)} 
          />

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
                    onClick={() => handleDeleteTag(tag)}
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

          <Button 
            title="Save"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}