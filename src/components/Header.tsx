import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b-2 border-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-orange-500 transition-transform duration-300 hover:scale-105">
          Eaters.com
        </Link>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex space-x-8">
          <MainNav />
        </nav>
      </div>
    </header>
  );
};

export default Header;
