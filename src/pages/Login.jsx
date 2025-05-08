import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="p-2 border mb-2 w-full"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border mb-2 w-full"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => login(username, password)} className="p-2 bg-blue-500 text-white w-full">
        Login
      </button>
    </div>
  );
};

export default Login;
