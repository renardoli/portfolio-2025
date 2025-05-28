import { Link } from 'react-router';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="container mx-auto p-8 flex justify-between items-center">
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
