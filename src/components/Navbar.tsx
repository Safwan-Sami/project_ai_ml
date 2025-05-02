import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="flex items-center text-xl font-bold text-blue-600 dark:text-blue-400">
              <span className="mr-2 font-mono">GA-CNN</span>
              Tuning
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#methodology" className="hidden md:block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              Methodology
            </a>
        
            <a href="#results" className="hidden md:block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              Results
            </a>
            <a href="#team" className="hidden md:block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              Team
            </a>
        
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <span className="text-sm text-gray-500 dark:text-gray-400 hidden md:block">
              IUT - OIC
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;