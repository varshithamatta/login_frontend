import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { username, password });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      alert('Login failed!');
    }
  };

  const signup = async (username, password) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, { username, password });
      alert('Signup successful! Please login.');
      navigate('/');
    } catch (error) {
      alert('Signup failed!');
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
