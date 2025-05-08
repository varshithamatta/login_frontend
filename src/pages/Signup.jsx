import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useContext(AuthContext);

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Signup</h2>
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
      <button onClick={() => signup(username, password)} className="p-2 bg-green-500 text-white w-full">
        Signup
      </button>
    </div>
  );
};

export default Signup;
