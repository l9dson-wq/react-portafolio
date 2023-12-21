import DropDownMenu from "./DropDownMenu";
import React, { useState, useEffect } from 'react';

function Navbar() {

  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('Theme') === 'dark' ||
    (!localStorage.getItem('Theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
    // Store theme preference in localStorage
    localStorage.setItem('Theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      {/* navbar */}
      <nav className="p-2 sticky top-0 backdrop-blur-xl z-10">
        <div
          className="max-w-full md:max-w-3xl mx-auto flex items-center justify-between"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold hover:animate-wiggle">
              <span className="mr-1 font-light"><i className="ri-terminal-window-line"></i></span>
              Andelson Lopez
            </h2>

            <div className="ml-10 md:inline-flex hidden md:items-center">
              <a href="#aboutMe" className="linkAbout mr-5 hover:cursor-pointer font-light hover:underline hover:underline-offset-4">About</a>
              <a href="#technologies" className=" mr-5  hover:cursor-pointer font-light hover:underline hover:underline-offset-4" id="">Techs</a>
              <a href="#projectsPreview" className="mr-5  hover:cursor-pointer font-light hover:underline hover:underline-offset-4" id="">Projects</a>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <i
              className={`ri-moon-line bg-bg_moon px-3 py-2.5 text-white text-sm mr-1 rounded-md hover:cursor-pointer animate-fade-down animate-duration-100 animate-delay-100 ${isDarkTheme ? '' : 'display-none'
                }`}
              onClick={handleThemeToggle}
            ></i>


            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="md:hidden inline-flex dark:text-white font-medium rounded-lg text-sm px-3 py-2.5 text-center items-center hover:bg-bg_light_hover_button dark:hover:bg-bg_hover_button border border-1 border-bg_button_border"
              type="button"
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>

          <DropDownMenu />
        </div>
      </nav>
    </>
  )
}

export default Navbar;