import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6';
import { timeline } from '../data/timeline';
import Layout from '../layout/Layout';

const Timeline = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 pt-5 pb-20 flex flex-col gap-32 lg:py-20">
        <div className="border-l-5 border-super-silver pl-16 ml-8 space-y-32 relative">
          {timeline.map(({ date, title, subtitle, type, description }) => (
            <div key={title} className="relative">
              <div className="absolute -left-[6.2rem] top-8 w-16 h-16 bg-tobiko-orange rounded-full flex items-center justify-center text-sm">
                <span>
                  {type === 'travail' && <FaGraduationCap size={'1.6rem'} />}
                  {type === 'formation' && <FaBriefcase size={'1.6rem'} />}
                </span>
              </div>
              <div>
                <p>{date}</p>
              </div>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <ul className="list-disc pl-8 mt-4">
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
