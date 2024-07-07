import { Container } from './styles.js';
import { Button } from '../../components/Button';

export function Details(){
  return(
    <Container>
      <h1>Hello world</h1>
      <Button title='hello' loading />
    </Container>
  )
}