import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useNavigate } from 'react-router-dom';

export function Header(){
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut(){
    navigation('/');
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}` 
    : avatarPlaceholder;
  
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src={avatarUrl} 
          alt={`Profile picture from ${user.name}`} 
          onError={(e) => e.target.src = avatarPlaceholder}
        />

        <div>
          <span>Welcome,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine title='Logout' />
      </Logout>
    </Container>
  );
}