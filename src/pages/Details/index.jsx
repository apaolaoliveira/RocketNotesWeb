import { Container, Links } from './styles.js';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export function Details(){
  return(
    <Container>
      <Header />

      <Section title='Resources'>
        <Links>
          <li><a href="">Link 1</a></li>
          <li><a href="">Link 2</a></li>
          <li><a href="">Link 3</a></li>
        </Links>
      </Section>

      <Section title='Tags'>
        <Tag title="node" />
        <Tag title="express" />
      </Section>

      <Button title='Back'/>
    </Container>
  )
}