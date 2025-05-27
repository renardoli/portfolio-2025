import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-8 items-center">
        <li>A propos</li>
        <li>Mes projets</li>
        <li>Mon parcours</li>
        <li>
          <FaGithub size={'2rem'} />
        </li>
        <li>
          <FaLinkedin size={'2rem'} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
