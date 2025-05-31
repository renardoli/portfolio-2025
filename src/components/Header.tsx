import { FaMoon, FaSun } from 'react-icons/fa6';
import { Link } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="container mx-auto p-8 flex flex-col justify-between items-center gap-8 md:flex-row">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex gap-4 items-center">
        <Nav />
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Passer au thème ${isDark ? 'clair' : 'sombre'}`}
          className="btn btn-icon btn-alt absolute top-6 right-8 md:relative md:top-0 md:right-0"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
