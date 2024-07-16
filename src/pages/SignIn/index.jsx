import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock } from 'react-icons/fi';
import { MdOutlineAlternateEmail } from "react-icons/md";

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Save and manage your favorites links</p>

        <h2>Login</h2>
        <Input 
          placeholder="Email"
          type="text"
          icon={MdOutlineAlternateEmail}
        />
        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
        />

        <Button title="Login" />

        <a href="">Sign up</a>
      </Form>
      <Background />
    </Container>
  );
}