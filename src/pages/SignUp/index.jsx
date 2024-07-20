
import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiUser } from 'react-icons/fi';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export function SignUp(){
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
        />
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

        <Button title="Sign up" />

        <Link to="/">Back</Link>
      </Form>
    </Container>
  );
}