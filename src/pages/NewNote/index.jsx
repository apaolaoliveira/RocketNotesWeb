import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';

import { Container, Form } from './styles';

export function NewNote(){
  return ( 
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>New Note</h1>
            <a href="/">Back</a>
          </header>
          <Input type="text" placeholder="Title" />
          <TextArea placeholder="Write your note here..." />

          <Section title="Useful links">
            <NoteItem canOpenLink value="https://www.google.com" />
            <NoteItem canOpenLink value="https://www.youtube.com" />
            <NoteItem isNew placeholder="Novo link"/>
          </Section>
        </Form>
      </main>
    </Container>
  )
}