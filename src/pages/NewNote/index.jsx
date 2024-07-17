import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
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
        </Form>
      </main>
    </Container>
  )
}