import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <nav className="flex flex-col gap-8 items-center bg-dynamic-black text-super-silver w-full p-4 rounded-4xl [&_a:hover]:text-tobiko-orange md:flex-row md:bg-transparent md:text-dynamic-black md:w-auto">
      <ul className="flex gap-6 items-center font-semibold [&>li>a.active]:text-tobiko-orange">
        <li className="flex-shrink-0">
          <NavLink to="/">A propos</NavLink>
        </li>
        <li className="flex-shrink-0">
          <NavLink to="/projects">Mes projets</NavLink>
        </li>
        <li className="flex-shrink-0">
          <NavLink to="/timeline">Mon parcours</NavLink>
        </li>
      </ul>
      <div className="hidden md:flex md:gap-8">
        <a target="_blank" rel="noreferrer" href="https://github.com/renardoli">
          <FaGithub className="w-5 h-auto sm:w-8" />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/renard-olivier/"
        >
          <FaLinkedin className="w-5 h-auto sm:w-8" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
