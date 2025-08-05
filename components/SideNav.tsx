
import React from 'react';
import { NAV_LINKS } from '../constants';

interface NavLink {
  name: string;
  href: string;
}

interface SideNavProps {
  navLinks: NavLink[];
  activeSection: string;
}

const SideNav: React.FC<SideNavProps> = ({ navLinks, activeSection }) => {
  const allLinks = [{ name: 'Home', href: '#hero' }, ...navLinks];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <ul className="space-y-4">
        {allLinks.map((link) => (
          <li key={link.href} className="group relative flex items-center">
            <a 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              aria-label={`Go to ${link.name} section`}
              className={`block w-3 h-3 rounded-full transition-all duration-300
                ${activeSection === link.href 
                  ? 'bg-pink-500 dark:bg-pink-400 scale-125' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-pink-400 dark:hover:bg-pink-500 hover:scale-110'
                }`}
            >
              <span className="sr-only">{link.name}</span>
            </a>
            <span 
              className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            >
              {link.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;