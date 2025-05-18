import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-blue-600 dark:bg-blue-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">THE ANSH</Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
          <Link to="/owner" className="text-white hover:text-gray-200">Owner</Link>
          <Link to="/copyright" className="text-white hover:text-gray-200">Copyright</Link>
          <button onClick={toggleTheme} className="text-white hover:text-gray-200">
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
