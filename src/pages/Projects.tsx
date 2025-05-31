import { FaGithub } from 'react-icons/fa6';
import { useTheme } from '../contexts/ThemeContext';
import { graphicDesigns } from '../data/graphicDesigns';
import { projects } from '../data/projects';
import Layout from '../layout/Layout';

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <Layout>
      <div className="container mx-auto px-8 mb-24 flex flex-col gap-24 md:mb-32 md:gap-32 md:py-10">
        {projects.map(
          ({
            title,
            subtitle,
            img,
            imgDark,
            imgAlt,
            link,
            github,
            tags,
            description,
          }) => (
            <div
              key={title}
              className="flex flex-col gap-4 sm:gap-8 lg:flex-row"
            >
              <img
                className="w-full m-auto rounded-4xl lg:order-last lg:w-auto"
                src={isDark && imgDark ? imgDark : img}
                alt={imgAlt}
              />
              <div className="flex flex-col gap-4 justify-center">
                <div>
                  <h2>{title}</h2>
                  <h3>{subtitle}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                      <p
                        key={tag}
                        className="bg-super-silver w-fit px-3 py-1 rounded-2xl text-xs!"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
                <p>{description}</p>
                <div className="flex gap-2">
                  <a
                    className="btn btn-default"
                    target="_blank"
                    rel="noreferrer"
                    href={link}
                  >
                    Voir le projet
                  </a>
                  <a
                    className="btn btn-icon btn-alt"
                    target="_blank"
                    rel="noreferrer"
                    href={github}
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
      <div>
        <h2 className="container mx-auto mt-16 px-8">
          Réalisations graphiques
        </h2>
        <div className="bg-super-silver py-16 -mt-8">
          <div className="container mx-auto px-8">
            <div className="overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
              <div className="flex gap-8 w-max animate-infinite-scroll">
                {graphicDesigns.map(({ img, imgAlt }) => (
                  <img
                    key={imgAlt}
                    className="gallery-img"
                    src={img}
                    alt={imgAlt}
                  />
                ))}
                {graphicDesigns.map(({ img, imgAlt }) => (
                  <img
                    key={imgAlt}
                    className="gallery-img"
                    src={img}
                    alt={imgAlt}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
