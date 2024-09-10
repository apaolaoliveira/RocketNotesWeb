import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock } from 'react-icons/fi';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { useState } from "react";

export function SignIn(){
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(){
    signIn({ email, password });
  }

  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Save and manage your favorites links</p>

        <h2>Sign in</h2>
        <Input 
          placeholder="Email"
          type="text"
          icon={MdOutlineAlternateEmail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Login" onClick={handleSignIn}/>

        <Link to="/register">Sign up</Link>
      </Form>
      <Background />
    </Container>
  );
}