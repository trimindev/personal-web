import { useTheme } from "next-themes";
import Image from "next/image";
import { MetaProject } from "pages/projects";
import React from "react";
import info from "../images/icons/info.svg";
import infowhite from "../images/icons/infowhite.svg";
import show from "../images/icons/show.svg";
import showwhite from "../images/icons/showwhite.svg";
import images from "../data/projects/export";

function Project({ img, title, tags, link, github }: MetaProject) {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="w-full  mx-auto lg:mx-0 md:w-[700px]  lg:w-[474px]   layout__post rounded-3xl p-4 betterhover:hover:ring-2 betterhover:hover:ring-violet-700 dark:betterhover:hover:ring-violet-300  duration-100 ">
      <Image
        // @ts-ignore
        src={images[`${img}`]}
        width={1703}
        height={980}
        alt=""
        className="object-cover rounded-xl"
      />
      <div className="flex gap-3 py-2  ">
        <button
          className=" w-1/2 items-center py-2 dark:bg-darkgray-10  gap-1 font-semibold flex rounded-xl justify-center cursor-pointer betterhover:hover:bg-violet-400 bg-darkwhite-9 "
          onClick={() => window.open(github)}
        >
          <Image
            src={currentTheme === "dark" ? infowhite : info}
            width={25}
            height={25}
            alt=""
            className="object-contain cursor-pointer"
          />
          <span>Github</span>
        </button>
        <button
          className="w-1/2  items-center py-2 justify-center  bg-darkwhite-8 dark:bg-darkgray-11 gap-1 font-semibold flex rounded-xl cursor-pointer betterhover:hover:bg-violet-400 "
          onClick={() => window.open(link)}
        >
          <Image
            src={currentTheme === "dark" ? showwhite : show}
            width={25}
            height={25}
            alt=""
            className="object-contain cursor-pointer"
          />
          <span>View</span>
        </button>
      </div>
      <div className="px-3 py-3  flex flex-col">
        <h1 className="font-bold text-xl sm:text-2xl">{title}</h1>

        <ul className="flex flex-wrap mt-4 gap-4 font-semibold ">
          {tags?.map((tag) => (
            <li className="" key="tag">
              #{tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
