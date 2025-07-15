import { useState } from "react";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-950 to-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-white text-xl font-bold flex items-center gap-2">
          <FaHome /> Portfolio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-base md:text-lg font-thin text-white">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-purple-500 underline-offset-4 transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90">
          <ul className="flex flex-col items-center gap-6 py-4 text-base font-thin text-white">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-purple-500 transition duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
