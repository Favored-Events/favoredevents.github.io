import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-serif text-amber-800">
            Favored Events
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-800 transition-colors">
              Home
            </Link>
            <Link to="/engagement-proposals" className="text-gray-700 hover:text-amber-800 transition-colors">
              Engagement Proposals
            </Link>
            <Link to="/luxury-event-decor" className="text-gray-700 hover:text-amber-800 transition-colors">
              Luxury Event Decor
            </Link>
            <Link to="/photography" className="text-gray-700 hover:text-amber-800 transition-colors">
              Photography
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-amber-800 transition-colors">
              Gallery
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/engagement-proposals"
                className="text-gray-700 hover:text-amber-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Engagement Proposals
              </Link>
              <Link
                to="/luxury-event-decor"
                className="text-gray-700 hover:text-amber-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Luxury Event Decor
              </Link>
              <Link
                to="/photography"
                className="text-gray-700 hover:text-amber-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Photography
              </Link>
              <Link
                to="/gallery"
                className="text-gray-700 hover:text-amber-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}