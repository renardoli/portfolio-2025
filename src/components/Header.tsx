import { Link } from 'react-router';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="container mx-auto p-8 flex flex-col justify-between items-center gap-8 md:flex-row">
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
