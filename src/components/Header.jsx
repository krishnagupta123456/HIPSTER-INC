import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import themes from '../themes/Themes';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = {
    theme1: 'text-base hover:text-red-500',
    theme2: 'text-base hover:text-green-400',
    theme3: 'text-base hover:text-blue-300',
  };

  const selectClass = {
    theme1: 'bg-red-500 text-white',
    theme2: 'bg-green-600 text-gray-800 font-semibold',
    theme3: 'bg-blue-400 text-white',
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur p-4 shadow-md">
      <div className="mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-20">
        <h1 className="text-xl font-bold">🎨 Multi-Theme App</h1>

        <nav className="hidden sm:flex items-center gap-8">
          <Link to="/" className={linkClass[theme]}>Home</Link>
          <Link to="/about" className={linkClass[theme]}>About</Link>
          <Link to="/contact" className={linkClass[theme]}>Contact</Link>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className={`${selectClass[theme]}  w-full p-2 rounded-md text-base focus:outline-none`}
          >
            {Object.entries(themes).map(([key, val]) => (
              <option className='flex' key={key} value={key}>{val.name}</option>
            ))}
          </select>
        </nav>

        {/* Hamburger for mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col gap-4 mt-4 px-6 pb-4 shadow-md border-t border-gray-200">
          <Link to="/" onClick={() => setIsOpen(false)} className={linkClass[theme]}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={linkClass[theme]}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={linkClass[theme]}>Contact</Link>

          <select
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value);
              setIsOpen(false);
            }}
            className={`${selectClass[theme]} p-2 rounded-md text-base`}
          >
            {Object.entries(themes).map(([key, val]) => (
              <option key={key} value={key}>{val.name}</option>
            ))}
          </select>
        </div>
      )}
    </header>
  );
}

export default Header;