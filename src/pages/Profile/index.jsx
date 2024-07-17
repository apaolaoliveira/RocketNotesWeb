import { Container, Form, Avatar } from "./styled";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiLock, FiUser, FiCamera } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";

export function Profile(){
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img src='https://github.com/apaolaoliveira.png' alt='Profile picture' />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

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
          placeholder="Current password"
          type="password"
          icon={FiLock}
        />
        <Input 
          placeholder="New password"
          type="password"
          icon={FiLock}
        />

        <Button title="Save" />
      </Form>
    </Container>
  )
}