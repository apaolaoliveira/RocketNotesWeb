import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header(){
  return (
    <Container>
      <Profile>
        <img src='https://github.com/apaolaoliveira.png' alt='Profile picture' />

        <div>
          <span>Welcome,</span>
          <strong>Paola Oliveira</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine title='Logout' />
      </Logout>
    </Container>
  );
}