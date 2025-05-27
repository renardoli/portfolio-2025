import { FaEnvelope, FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-dynamic-black text-white flex">
      <div className="container p-8 flex justify-between">
        <div className="flex gap-8">
          <p className="flex gap-2 items-center">
            <FaPhone />
            +33623006421
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
