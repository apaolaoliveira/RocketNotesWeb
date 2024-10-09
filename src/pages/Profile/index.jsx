import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Container, Form, Avatar } from "./styled";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiLock, FiUser, FiCamera } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Profile(){
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}` 
    : avatarPlaceholder;
    
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdateProfile(){
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(e){
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <button onClick={() => navigate(-1)} type="button">
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt='Profile picture' />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              type="file" 
              id="avatar" 
              onChange={handleChangeAvatar}
            />
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