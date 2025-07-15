import { FaHome } from 'react-icons/fa';

const Header = () => {
  const navItems = [
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-950 to-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
        <nav>
          <ul className="flex gap-8 text-base md:text-lg font-thin text-white">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-purple-600 underline-offset-4 transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
