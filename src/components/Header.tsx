import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="container p-8 flex justify-between items-center">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
