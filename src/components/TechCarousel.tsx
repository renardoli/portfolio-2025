import { techIcons } from '../data/techIcons';

const TechCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] sm:py-16">
      <div className="flex w-max animate-infinite-scroll">
        {techIcons.map(({ name, icon }) => (
          <img
            key={name}
            src={icon}
            alt={name}
            title={name}
            className="w-8 h-8 mx-4 object-contain transition-transform duration-300 hover:scale-120 sm:w-16 sm:h-16"
          />
        ))}
        {techIcons.map(({ name, icon }) => (
          <img
            key={name}
            src={icon}
            alt={name}
            title={name}
            className="w-8 h-8 mx-4 object-contain transition-transform duration-300 hover:scale-120 sm:w-16 sm:h-16"
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
