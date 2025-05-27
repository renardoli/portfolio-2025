import { techIcons } from '../data/techIcons';

const TechCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-16 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-64px),transparent_100%)]">
      <div className="flex w-max animate-infinite-scroll">
        {techIcons.map(({ name, icon }) => (
          <img
            key={name}
            src={icon}
            alt={name}
            title={name}
            className="w-16 h-16 mx-4 object-contain transition-transform duration-300 hover:scale-120"
          />
        ))}
        {techIcons.map(({ name, icon }) => (
          <img
            key={name}
            src={icon}
            alt={name}
            title={name}
            className="w-16 h-16 mx-4 object-contain transition-transform duration-300 hover:scale-120"
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
