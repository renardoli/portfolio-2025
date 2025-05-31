import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6';
import { timeline } from '../data/timeline';
import Layout from '../layout/Layout';

const Timeline = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 pb-20 flex flex-col gap-32 md:pt-10">
        <div className="border-l-5 border-super-silver pl-9 ml-4.5 space-y-16 relative sm:pl-16 sm:ml-8 sm:space-y-32">
          {timeline.map(({ date, title, subtitle, type, description }) => (
            <div key={title} className="relative">
              <div className="absolute -left-[3.6rem] top-5.5 w-10 h-10 bg-tobiko-orange text-[#1d1d1b] rounded-full flex items-center justify-center text-sm sm:-left-[6.1rem] sm:top-8 sm:w-16 sm:h-16">
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
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              <ul className="list-disc pl-4 mt-4">
                {description.map((line, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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
