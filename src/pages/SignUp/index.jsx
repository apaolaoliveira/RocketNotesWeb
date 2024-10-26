
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

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password) return toast.warn('Please fill all the required fields');
    
    api
      .post('/users', { name, email, password })
      .then(() => {
        toast.success('User created successfully');
        navigate('/');
      })
      .catch(err => {
        if(err.response) toast.error(err.response.data.message);
        else toast.error('It was not possible to sign up');
      });
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

        <Button title="Sign up" onClick={handleSignUp}/>

        <Link to="/">Back</Link>
      </Form>
    </Container>
  );
}