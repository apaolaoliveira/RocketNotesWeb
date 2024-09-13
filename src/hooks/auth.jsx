import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }){
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@rocketnotes:user', JSON.stringify(user));
      localStorage.setItem('@rocketnotes:token', token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (err) {
      if (err.response) alert(err.response.data.message);
      else alert('It was not possible to sign in');
    }
  }

  function signOut(){
    localStorage.removeItem('@rocketnotes:user');
    localStorage.removeItem('@rocketnotes:token');

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketnotes:user');
    const token = localStorage.getItem('@rocketnotes:token');

    if(user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        signIn, 
        signOut,
        user: data.user 
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}