import { Container, Links } from './styles.js';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function Details(){
  return(
    <Container>
      <Header />

      <ButtonText title="Delete note" />

      <Section title='Resources'>
        <Links>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
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