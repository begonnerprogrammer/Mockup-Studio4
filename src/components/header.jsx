import { Moon, Sun, Github, Twitter, Share2 } from 'lucide-react';
import { useContext, useState } from 'react';
import {userContext} from "../App"
import { NavLink } from 'react-router-dom';


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
        <div className="flex items-center justify-between h-16 ">
          {/* Logo and Title */}




          
   <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4" >
       <NavLink to={"/"}>
            <div className="w-8 sm:w-9 md:w-10 lg:w-11 h-8 sm:h-9 md:h-10 lg:h-11 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
           
              <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-xl">M</span>
                        
            </div>
            </NavLink>
             <NavLink to={"/"}>
          <div >
  <h1 className={`${color ? 'text-white' : 'text-gray-900'} hidden sm:block sm:text-xs md:text-sm lg:text-base font-bold `}>Mockup Studio</h1>
  <p className={`${color ? 'text-white' : 'text-gray-900'} hidden sm:block sm:text-[9px] md:text-sm lg:text-lg opacity-80 `}>Professional Screenshot Mockups</p>
</div>
</NavLink>

          </div>

          
        
         

          {/* Navigation Links */}
          <nav className='  items-center space-x-2 sm:space-x-3 sm:space-x-4 lg:space-x-6'> 
              <NavLink to={'/feature'}  className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-medium  ${color ? 'text-white' : 'text-black'} text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
 Features
    </NavLink>
            
            <NavLink to={'/template'}  className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-medium  ${color ? 'text-white' : 'text-black'} text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
 Templates
    </NavLink>
           <NavLink to={'/pricing'}  className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-medium  ${color ? 'text-white' : 'text-black'} text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
 Pricing
    </NavLink>
            <NavLink to={'/help'}  className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-medium  ${color ? 'text-white' : 'text-black'} text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
 Help
    </NavLink>
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