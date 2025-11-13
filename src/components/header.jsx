import { Moon, Sun, Github, Twitter, Share2 } from 'lucide-react';
import { useContext, useState } from 'react';
import {userContext} from "../App"

const Header = () => {

 const {color,setColor}=useContext(userContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
  setColor(prev => {
    const newTheme = !prev;
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return newTheme;
  });
};

  console.log("color is",color)

console.log(color);
  
  return <>
 <header
  className={`border-b border-gray-200 transition-colors duration-200 ${ color ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">M</span>
            </div>
          <div >
  <h1 className={`${color ? 'text-white' : 'text-gray-900'} text-lg font-bold `}>Mockup Studio</h1>
  <p className={`${color ? 'text-white' : 'text-gray-900'} text-xs opacity-80 `}>Professional Screenshot Mockups</p>
</div>


          </div>

          {/* Navigation Links */}
          <nav className='hidden md:flex items-center space-x-6'> 
            <a 
              href="/feature" 
              className={`text-sm font-medium  ${color ? 'text-white' : 'text-black'} text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Features
            </a>
            <a 
              href="/template" 
               className={`text-sm font-medium  ${color ? 'text-white' : 'text-black'} text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Templates
            </a>
            <a 
              href="/pricing" 
          className={`text-sm font-medium  ${color ? 'text-white' : 'text-black'} text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Pricing
            </a>
            <a 
              href="/help" 
            className={`text-sm font-medium  ${color ? 'text-white' : 'text-black'} text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Help
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium  ${color ? 'text-white' : 'text-black'} text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
               className={`text-sm font-medium  ${color ? 'text-white' : 'text-black'} text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              {/* <button
                className={`text-sm font-medium  ${color ? 'text-white' : 'text-black'} text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </button> */}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
             
                {color ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              
            </button>

            {/* Get Started Button
            <button className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button> */}
          </div>
        </div>
      </div>
    </header>
  </>
  
};

export default Header;