import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import logodarkmode from "../public/logowhite.svg";
import menu from "../images/icons/menu.svg";
import menuwhite from "../images/icons/menuwhite.svg";
import projects from "../images/icons/projects.svg";
import projectswhite from "../images/icons/projectswhite.svg";
import aboutme from "../images/icons/aboutme.svg";
import aboutmewhite from "../images/icons/aboutmewhite.svg";
import posts from "../images/icons/posts.svg";
import postswhite from "../images/icons/postswhite.svg";
import sun from "../images/icons/sun.svg";
import moonwhite from "../images/icons/moonwhite.svg";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const [navItemActive, setNavItemActive] = useState(4);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const navigations = [
    { label: "AboutMe", path: "/" },
    { label: "Posts", path: "/posts" },
    { label: "Projects", path: "/projects" },
  ];

  const renderThemeChanger = (currentTheme?: string) => {
    return (
      <button
        onClick={() => {
          currentTheme === "dark" ? setTheme("light") : setTheme("dark");
        }}
        className="p-1.5 rounded-xl ring-2 ring-darkgray-9 dark:ring-darkwhite-9 dark:text-darkwhite-9  betterhover:hover:text-violet-700 dark:betterhover:hover:text-violet-300 betterhover:hover:scale-105 betterhover:hover:ring-violet-700 dark:betterhover:hover:ring-violet-300
         bg-darkwhite-9 dark:bg-darkgray-8 duration-100 -translate-x-1"
      >
        {" "}
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
    <div
      className={`top-0 w-full items-center fixed z-50 border-darkwhite-8 dark:border-darkgray-8 background  select-none ${
        showMenu == true
          ? "border-b-[1.5px] shadow-sm  "
          : "border-b-[1.5px] shadow-sm  "
      }`}
    >
      <div className="max-w-screen-lg px-4 sm:px-5 py-3 mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <a className="flex items-center betterhover:hover:scale-105  ">
            <div className="translate-y-1">
              <Image
                src={
                  currentTheme === "dark"
                    ? "/icons/logowhite.svg"
                    : "/icons/logo.svg"
                }
                width={25}
                height={25}
                alt=""
                className="object-contain cursor-pointer"
              />
            </div>

            <h1 className="ml-1.5">trimindev</h1>
          </a>
        </Link>

        <ul className="gap-x-8 items-center hidden sm:flex font-medium ">
          {navigations.map((nav, index) => (
            <Link href={nav.path} key={nav.label}>
              <a
                className={`first-letter:betterhover:hover:scale-105 ${
                  navItemActive == index
                    ? "text-violet-800 dark:text-violet-300"
                    : ""
                }`}
                onClick={() => setNavItemActive(index)}
              >
                {nav.label}
              </a>
            </Link>
          ))}

          {renderThemeChanger(currentTheme)}
        </ul>

        <ul className="gap-x-5 items-center  flex visible sm:hidden">
          <Link href="/" key={""}>
            <a className=" flex items-centerju  ">
              <Image
                src={currentTheme === "dark" ? aboutmewhite : aboutme}
                width={25}
                height={25}
                alt=""
                className="object-contain cursor-pointer"
              />
            </a>
          </Link>
          <Link href="/posts" key={""}>
            <a className=" items-center flex">
              <Image
                src={currentTheme === "dark" ? postswhite : posts}
                width={25}
                height={25}
                alt=""
                className="object-contain cursor-pointer"
              />
            </a>
          </Link>
          <Link href="/projects" key={""}>
            <a className=" items-center flex  ">
              <Image
                src={currentTheme === "dark" ? projectswhite : projects}
                width={25}
                height={25}
                alt=""
                className="object-contain cursor-pointer 
                "
              />
            </a>
          </Link>
          <button
            onClick={() => {
              currentTheme === "dark" ? setTheme("light") : setTheme("dark");
            }}
            className="items-center flex "
          >
            <Image
              src={currentTheme === "dark" ? sun : moonwhite}
              width={25}
              height={25}
              alt=""
              className="object-contain cursor-pointer"
            />
          </button>
        </ul>

        {/* <div className="visible sm:hidden">
          <button
            className="w-5 h-5 relative z-50 flex items-center mr-0.5   "
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <div
                className={`block absolute h-0.5 w-5  dark:bg-white bg-darkgray-8  transition duration-500 ease-in-out ${
                  showMenu == true
                    ? "rotate-45 dark:bg-violet-400 bg-violet-600"
                    : "-translate-y-1 "
                }`}
              ></div>
              <div
                className={`block absolute h-0.5 w-5  dark:bg-white bg-darkgray-8 transform transition duration-500 ease-in-out ${
                  showMenu == true
                    ? "-rotate-45 dark:bg-violet-400 bg-violet-600"
                    : "translate-y-1"
                }`}
              ></div>
            </div>
          </button>
        </div> */}

        {/* <div
          className={` visible sm:hidden w-40 py-3  border-violet-600 z-40  dark:border-violet-400  dark:bg-darkgray-9 bg-darkwhite-9 fixed top-14 right-2 transition transform duration-300 ease-in-out ${
            showMenu == true
              ? "opacity-1 visible  border-2 rounded-xl"
              : "opacity-0 invisible scale-90 "
          }`}
        >
          <div>
            <ul className="flex-col items-center  flex gap-2 ">
              {navigations.map((nav) => (
                <Link href={nav.path} key={nav.label}>
                  <a
                    className="flex justify-center pb-3 w-full border-b-2 dark:border-violet-400 border-violet-600"
                    onClick={() => setShowMenu(false)}
                  >
                    {nav.label}
                  </a>
                </Link>
              ))}
              <button
                className="mt-1.5 p-1.5 rounded-full bg-violet-300 dark:bg-violet-800"
                onClick={() => {
                  currentTheme === "dark"
                    ? setTheme("light")
                    : setTheme("dark");
                }}
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
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
