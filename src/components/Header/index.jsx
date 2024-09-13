import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';
import { useAuth } from '../../hooks/auth';

export function Header(){
  const { signOut } = useAuth();
  
  return (
    <Container>
      <Profile to="/profile">
        <img src='https://github.com/apaolaoliveira.png' alt='Profile picture' />

        <div>
          <span>Welcome,</span>
          <strong>Paola Oliveira</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine title='Logout' />
      </Logout>
    </Container>
  );
}