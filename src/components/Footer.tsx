import { FaEnvelope, FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-dynamic-black text-white flex">
      <div className="container mx-auto p-8 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 items-center sm:flex-row sm:gap-8">
          <p className="flex gap-2 items-center">
            <FaPhone />
            0623006421
          </p>
          <p className="flex gap-2 items-center">
            <FaEnvelope />
            contact@olivier-renard.com
          </p>
        </div>
        <p>&copy; 2025 Olivier Renard</p>
      </div>
    </footer>
  );
};

export default Footer;
