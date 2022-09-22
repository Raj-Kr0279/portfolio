import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import useDarkToggle from "../../useDarkToggle";
// import themeToggle from "../../useDarkToggle";

function Header() {
  const [colorTheme, setTheme] = useDarkToggle();

  return (
    <>
      <nav className="h-20 flex justify-around items-center shadow dark:bg-black dark:text-white transition-all dark:shadow-lg dark:shadow-white w-full">
        <div className="logo">
          <span>Rajendra</span>
        </div>
        <ul className="flex justify-end gap-4 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/About">About</Link>

          <li>
            <Link to="/Projects">My Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="theme-toggler p-3 rounded-full shadow-[#0000007d] shadow-lg text-white bg-slate-500 dark:bg-black fixed top-4 right-4 z-50">
          <span onClick={() => setTheme(colorTheme)}>
            {colorTheme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </span>
        </div>
      </nav>
    </>
  );
}

export default Header;
