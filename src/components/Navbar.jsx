import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-blue-500 text-white">
      <h1 className="text-xl">Varshtiha App</h1>
      {token && <button onClick={logout} className="ml-4">Logout</button>}
    </nav>
  );
};

export default Navbar;
