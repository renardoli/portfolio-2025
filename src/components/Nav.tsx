import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-8 items-center">
        <li>
          <Link to="/">A propos</Link>
        </li>
        <li>
          <Link to="/projects">Mes projets</Link>
        </li>
        <li>
          <Link to="/timeline">Mon parcours</Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/renardoli"
          >
            <FaGithub size={'2rem'} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/renard-olivier/"
          >
            <FaLinkedin size={'2rem'} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
