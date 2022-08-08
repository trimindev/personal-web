import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../public/images/logo.png";
import logodarkmode from "../public/images/logodarkmode.png";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigations = [
    { label: "AboutMe", path: "/" },
    { label: "Posts", path: "/posts" },
    { label: "Projects", path: "/projects" },
  ];

  const renderThemeChanger = (currentTheme?: string) => {
    if (!mounted) return null;

    return (
      <button
        onClick={() => {
          currentTheme === "dark" ? setTheme("light") : setTheme("dark");
        }}
        className="p-1.5 rounded-lg ring-2 ring-darkgray-9 dark:ring-violet-300 dark:text-violet-300 hover:text-violet-700 hover:ring-violet-700 bg-darkwhite-9 dark:bg-darkgray-8"
      >
        {currentTheme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>
    );
  };

  return (
    <div className=" top-0 w-full items-center fixed z-50 border-b-[1.5px] border-darkwhite-8 dark:border-darkgray-8 bg-white dark:bg-darkgray-9 select-none">
      <div className="max-w-screen-lg px-5 py-3 mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <a className="flex items-center font-bold text-lg sm:text-xl cursor-pointer overflow-visible">
            <Image
              src={currentTheme === "dark" ? logodarkmode : logo}
              width={25}
              height={20}
              alt=""
              className="object-contain cursor-pointer"
            />
            <span className="ml-2">trimindev</span>
          </a>
        </Link>

        <ul className="gap-x-8 items-center hidden sm:flex font-medium">
          {navigations.map((nav) => (
            <Link href={nav.path} key={nav.label}>
              <a>{nav.label}</a>
            </Link>
          ))}

          {renderThemeChanger(currentTheme)}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
