import Prism from 'prismjs';
import { useEffect } from 'react';
import Layout from '../layout/Layout';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import { Link } from 'react-router';

const code = `
function handle404() {
  throw new Error("Je ne trouve pas la page que vous recherchez.");
}

handle404();
`.trim();

const PageNotFound = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-8 mb-24 flex flex-col items-center gap-8 md:mb-32 md:gap-16 md:py-10">
        <div className="flex flex-col gap-8 lg:w-fit">
          <div className="flex flex-col items-center">
            <h2>Oups !</h2>
            <h3>Page non trouvée</h3>
          </div>
          <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-zinc-700">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-700">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-auto text-xs text-zinc-300">404.js</span>
            </div>
            <div className="p-6">
              <pre className="language-javascript text-xs! bg-transparent! sm:text-sm!">
                <code className="language-javascript whitespace-pre-wrap! break-words!">
                  {code}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="btn btn-default">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
