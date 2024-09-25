import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-red-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Site Name */}
        <span className="text-4xl text-white font-extrabold tracking-tight">
          Eaters.com
        </span>

        {/* Links */}
        <nav className="text-white font-semibold tracking-tight flex gap-6">
          <a href="#privacy" className="hover:text-yellow-300 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-yellow-300 transition-colors duration-300">
            Terms of Service
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-white text-sm opacity-75">
        © {new Date().getFullYear()} Eaters. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
