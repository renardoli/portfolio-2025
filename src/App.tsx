import photo from './assets/img/olivier-renard-photo.png';
import Footer from './components/Footer';
import Header from './components/Header';
import TechCarousel from './components/TechCarousel';
import { techStack } from './data/techStack';

function App() {
  return (
    <>
      <Header />
      <main className="container px-8 pt-5 pb-20 flex flex-col gap-8 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row">
          <img
            className="rounded-full aspect-square w-xs m-auto object-cover object-top lg:rounded-4xl lg:order-last lg:m-0 xl:w-auto xl:aspect-auto"
            src={photo}
            alt="Portrait d'Olivier Renard"
          />
          <div className="flex flex-col gap-8 justify-center">
            <div>
              <h1>
                Olivier{' '}
                <span className="font-thin font-stretch-condensed">Renard</span>
              </h1>
              <h2>Développeur Fullstack Node.js/React</h2>
            </div>
            <p>
              Mon parcours s'est construit autour d'une passion précoce pour
              l'informatique, nourrie par{' '}
              <strong>
                la curiosité de comprendre et de manipuler les systèmes
              </strong>{' '}
              dès l'enfance. Après un bac STI Électronique qui m'a permis
              d'explorer les bases matérielles, j'ai poursuivi avec un DUT
              Réseaux & Télécoms pour{' '}
              <strong>
                approfondir l'infrastructure des systèmes numériques
              </strong>
              . J'ai ensuite complété cette approche technique par une licence
              professionnelle orientée vers les technologies de l'information et
              de la communication orientée entreprises. Ce cheminement m'a
              progressivement conduit vers le développement web, avec{' '}
              <strong>des bases solides allant du hardware au réseau</strong>.
              Après plusieurs expériences, dont une phase entrepreneuriale, j'ai
              choisi de me spécialiser pleinement via une formation full stack.
              Aujourd'hui, je mets à profit{' '}
              <strong>
                ce parcours transversal pour concevoir, développer et déployer
                des solutions web avec une vision globale des systèmes
              </strong>
              .
            </p>
            <button type="button" className="btn btn-default">
              Voir mes projets
            </button>
          </div>
        </div>
        <TechCarousel />
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {techStack.map(({ title, elements }) => (
            <div key={title}>
              <h3>{title}</h3>
              <ul className="list-disc pl-6">
                {elements.map((element) => (
                  <li key={element}>{element}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
