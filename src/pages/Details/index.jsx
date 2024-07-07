import { Container, Links, Content } from './styles.js';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function Details(){
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Delete note" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit abet, consectetur adipiscing edit.
            Sed non quam falis. Done nec maris ac neue ullamcorper laborais. 
            Integer vel neue vel sapiens semper fucus. Sed id enid a neue semper pulmonar vel sit abet arca.
          </p>

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
        </Content>
      </main>
    </Container>
  )
}