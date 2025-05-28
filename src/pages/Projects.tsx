import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { graphicDesigns } from '../data/graphicDesigns';
import { projects } from '../data/projects';
import Layout from '../layout/Layout';

const Projects = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 pt-5 pb-20 flex flex-col gap-32 lg:py-20">
        {projects.map(
          ({ title, subtitle, img, imgAlt, link, github, description }) => (
            <div key={title} className="flex flex-col gap-8 lg:flex-row">
              <img
                className="w-full m-auto rounded-4xl lg:order-last lg:w-auto"
                src={img}
                alt={imgAlt}
              />
              <div className="flex flex-col gap-8 justify-center">
                <div>
                  <h1>{title}</h1>
                  <h2>{subtitle}</h2>
                </div>
                <p>{description}</p>
                <div className="flex gap-4">
                  <button type="button" className="btn btn-default">
                    Voir plus
                  </button>
                  <a
                    className="btn btn-alt"
                    target="_blank"
                    rel="noreferrer"
                    href={github}
                  >
                    <FaGithub size="1.6rem" />
                  </a>
                  <a
                    className="btn btn-alt"
                    target="_blank"
                    rel="noreferrer"
                    href={link}
                  >
                    <FaArrowUpRightFromSquare size="1.6rem" />
                  </a>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
      <div>
        <h1 className="container mx-auto mt-16 px-8">Créations graphiques</h1>
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
