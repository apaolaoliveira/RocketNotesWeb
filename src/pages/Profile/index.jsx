import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

import { Container, Form, Avatar } from "./styled";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiLock, FiUser, FiCamera } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";

export function Profile(){
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  async function handleUpdateProfile(){
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    await updateProfile({ user });
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
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
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="Email"
          type="text"
          icon={MdOutlineAlternateEmail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Current password"
          type="password"
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input 
          placeholder="New password"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="Save" onClick={handleUpdateProfile} />
      </Form>
    </Container>
  )
}