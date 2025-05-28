import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-4 items-center font-semibold sm:gap-8">
        <li className="flex-shrink-0">
          <Link to="/">A propos</Link>
        </li>
        <li className="flex-shrink-0">
          <Link to="/projects">Mes projets</Link>
        </li>
        <li className="flex-shrink-0">
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
