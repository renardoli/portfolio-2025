import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6';
import { timeline } from '../data/timeline';
import Layout from '../layout/Layout';

const Timeline = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 pt-5 pb-20 flex flex-col gap-32 sm:py-20">
        <div className="border-l-5 border-super-silver pl-8 ml-6 space-y-32 relative sm:pl-16 sm:ml-8">
          {timeline.map(({ date, title, subtitle, type, description }) => (
            <div key={title} className="relative">
              <div className="absolute -left-[3.7rem] top-4 w-12 h-12 bg-tobiko-orange rounded-full flex items-center justify-center text-sm sm:-left-[6.1rem] sm:top-8 sm:w-16 sm:h-16">
                <span>
                  {type === 'travail' && (
                    <FaBriefcase size={'50%'} className="m-auto" />
                  )}
                  {type === 'formation' && (
                    <FaGraduationCap size={'50%'} className="m-auto" />
                  )}
                </span>
              </div>
              <div>
                <p>{date}</p>
              </div>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <ul className="list-disc pl-4 mt-4">
                {description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Timeline;
