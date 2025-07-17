
import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { FiLock, FiUser } from 'react-icons/fi';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export function SignUp(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSignUp() {
    if(!name || !email || !password) return toast.warn('Please fill all the required fields');
  
    setLoading(true);
  
    const timeoutId = setTimeout(() => {
      toast.warn("Warming up the server... This may take a few seconds. Thanks for your patience!");
    }, 6000);
  
    try {
      await api.post('/users', { name, email, password });
      toast.success('User created successfully');
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error('It was not possible to sign up, please try again later');
      }
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }

  return(
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Save and manage your favorites links</p>

        <h2>Sign up</h2>
        <Input 
          placeholder="Name"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
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
          title="Sign up"
          onClick={handleSignUp}
          loading={loading}
        />

        <Link to="/">Back</Link>
      </Form>
    </Container>
  );
}