import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock } from 'react-icons/fi';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { useState } from "react";
import { toast } from "react-toastify";

export function SignIn(){
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignIn(){
    setLoading(true);

    const timeoutId = setTimeout(() => {
      toast.warn("Warming up the server... This may take a few seconds. Thanks for your patience!");
    }, 6000);

    try {
      await signIn({ email, password });
    } catch(error) {
      console.error(error)
      toast.error("Error signing in, please check your credentials.");
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
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

        <Button 
          title="Login"
          onClick={handleSignIn}
          loading={loading}
        />

        <Link to="/register">Sign up</Link>
      </Form>
      <Background />
    </Container>
  );
}