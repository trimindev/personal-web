import Image from "next/image";
import { useTheme } from "next-themes";
import avatar from "../images/avatar.jpg";
import linkedin from "../images/icons/linkedin.svg";
import linkedinwhite from "../images/icons/linkedinwhite.svg";
import git from "../images/icons/git.svg";
import gitwhite from "../images/icons/gitwhite.svg";
import mail from "../images/icons/mail.svg";
import mailwhite from "../images/icons/mailwhite.svg";
import copy from "../images/icons/copy.svg";
import copywhite from "../images/icons/copywhite.svg";
import checkwhite from "../images/icons/checkwhite.svg";
import check from "../images/icons/check.svg";
import cake from "../images/icons/cake.svg";
import cakewhite from "../images/icons/cakewhite.svg";
import location from "../images/icons/location.svg";
import locationwhite from "../images/icons/locationwhite.svg";
import { useState } from "react";
import Link from "next/link";

function Home() {
  const [copySuccess, setCopySuccess] = useState(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setTimeout(() => {
        setCopySuccess(false);
      }, 500);
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-3 max-w-screen-md mx-auto pt-24 px-2 select-none">
      <div className="shadow-full rounded-lg dark:bg-darkgray-9 bg-white flex flex-col  items-center pt-24 relative">
        <div className="select-none absolute -top-[86px] border-[6px] rounded-full flex overflow-hidden dark:border-darkgray-8 border-darkwhite-9 ">
          <Image
            src={avatar}
            width={160}
            height={160}
            alt=""
            className="object-top object-cover cursor-pointer"
          />
        </div>

        <h1 className="font-bold text-3xl">Tri Minh Nguyen</h1>
        <p className="font-medium mt-2">frontend software developer</p>

        <div className="mt-7 flex gap-6">
          <div className="flex items-center gap-1">
            <Image
              src={currentTheme === "dark" ? cakewhite : cake}
              alt=""
              width={20}
              height={20}
            />
            <p>25/12/2001</p>
          </div>
          <div className="flex items-center gap-0.5">
            <Image
              src={currentTheme === "dark" ? locationwhite : location}
              alt=""
              width={20}
              height={20}
            />
            <p>Ho Chi Minh</p>
          </div>
        </div>

        <div className="flex mt-7 gap-x-4">
          <Image
            src={currentTheme === "dark" ? linkedinwhite : linkedin}
            alt=""
            width={40}
            height={40}
            onClick={() => {
              window.open("https://www.linkedin.com/in/trimindev/");
            }}
            className="cursor-pointer betterhover:hover:scale-110"
          />

          <Image
            src={currentTheme === "dark" ? gitwhite : git}
            alt=""
            width={40}
            height={40}
            onClick={() => {
              window.open("https://github.com/trimindev");
            }}
            className="cursor-pointer betterhover:hover:scale-110"
          />

          <Image
            src={currentTheme === "dark" ? mailwhite : mail}
            alt=""
            width={40}
            height={40}
            onClick={() => {
              window.open(
                "mailto:triminhnguyen.dev@gmail.com?subject=subject&cc=cc@gmail.com"
              );
            }}
            className="cursor-pointer betterhover:hover:scale-110"
          />
        </div>

        <div
          onClick={() => copyToClipBoard("triminhnguyen.dev@gmail.com")}
          className={`mt-7 cursor-pointer  dark:betterhover:hover:border-green-400 border-2  rounded-lg p-3 bg-darkwhite-9  dark:bg-darkgray-8 flex gap-x-4 items-center  ${
            copySuccess == true
              ? "border-green-600  dark:border-green-400"
              : "border-darkgray-9 dark:border-violet-400"
          }`}
        >
          <p className="font-medium ">triminhnguyen.dev@gmail.com</p>
          <Image
            src={
              currentTheme === "dark"
                ? copySuccess == true
                  ? checkwhite
                  : copywhite
                : copySuccess == true
                ? check
                : copy
            }
            alt=""
            width={20}
            height={20}
          />
        </div>

        <a
          href="https://drive.google.com/file/d/1WJO2u6dkViTO49xZ4734IkzypvuEkHxy/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="my-5 rounded-lg p-3  bg-darkgray-9 dark:bg-violet-600 betterhover:hover:text-white text-white dark:betterhover:hover:text-darkwhite-9 dark:text-darkwhite-9 font-semibold betterhover:hover:bg-darkgray-11 dark:betterhover:hover:bg-violet-500  dark:betterhover:hover:ring-offset-violet-300 betterhover:hover:scale-105 "
        >
          Download CV
        </a>
      </div>

      <div className="  shadow-full rounded-lg dark:bg-darkgray-9 bg-white py-4">
        <h1 className="font-bold px-4 sm:px-6  text-xl sm:text-2xl">{`<TechSkills/> 👨‍💻`}</h1>

        <div className=" my-4 h-0.5 w-full dark:bg-darkgray-8 bg-darkwhite-9 "></div>

        <div className="sm:py-4 py-2 px-7 sm:px-16   flex  flex-wrap gap-6 sm:gap-7 sm:w-5/6  ">
          <p className="tags border-orange-600 text-orange-600">#HTML5</p>
          <p className="tags border-pink-500 text-pink-500">#SCSS</p>
          <p className="tags border-yellow-400 text-yellow-400">#JavaScript</p>
          <p className="tags border-blue-400 text-blue-400">#ReactJs</p>
          <p className="tags border-sky-600 text-sky-600">#TypeScript</p>
          <p className="tags border-zinc-900 text-zinc-900 dark:border-darkwhite-9 dark:text-darkwhite-9 ">
            #NextJs
          </p>
          <p className="tags border-purple-600 text-purple-600">#Redux</p>
          <p className="tags border-cyan-500 text-cyan-500">#TailwindCSS</p>
          <p className="tags border-violet-700 text-violet-700">#Git</p>
          {/* <p className="tags border-sky-400 text-sky-400">#Docker</p> */}
        </div>
      </div>

      <div className="shadow-full rounded-lg dark:bg-darkgray-9 bg-white py-4">
        <h1 className="font-bold px-4 sm:px-6  text-xl sm:text-2xl">
          {`<Achivements/> 🏆`}
        </h1>

        <div className=" my-4 h-0.5 w-full dark:bg-darkgray-8 bg-darkwhite-9 "></div>

        <ul className="sm:px-16  py-2 px-7 font-normal text-lg flex flex-col gap-5">
          <li className="flex">
            <span className="mr-1">📜</span> Freecodecamp's Responsive Web
            Design Certificate
          </li>
          <li className="flex">
            <span className="mr-1">📜</span> Udemy Web Development Bootcamp
            Certificate
          </li>
          <li className="flex">
            <span className="mr-1">📜</span> C2-CEFR EF SET Certificate
          </li>
          <li className="flex">
            <span className="mr-1">🥈</span> 2 silver medal - Olympic Math Ho
            Chi Minh City
          </li>
        </ul>
      </div>

      <div className="shadow-full rounded-lg dark:bg-darkgray-9 bg-white py-4">
        <h1 className="font-bold px-4 sm:px-6  text-xl sm:text-2xl">
          {`<Education/> 📚`}
        </h1>

        <div className=" my-4 h-0.5 w-full dark:bg-darkgray-8 bg-darkwhite-9 "></div>

        <ul className="sm:px-16  py-2 px-7 font-normal text-lg flex flex-col gap-5">
          <li className="flex">
            <span className="mr-1">📕</span>
            <div>
              Studied E-Commerce at University of{" "}
              <span className="font-semibold">Information Technology</span> ,
              HCM (UIT) for 2 years [2019 - 2021] had quit
            </div>
          </li>
        </ul>
      </div>

      <div className="shadow-full rounded-lg dark:bg-darkgray-9 bg-white py-4">
        <h1 className="font-bold px-4 sm:px-6  text-xl sm:text-2xl">
          {`<Languages/> 💬`}
        </h1>

        <div className=" my-4 h-0.5 w-full dark:bg-darkgray-8 bg-darkwhite-9 "></div>

        <ul className="sm:px-16  py-1 px-7 font-normal text-lg flex flex-col gap-5">
          <li className="flex">
            <span className="mr-1">📖</span>
            <div>Read and understand documents in English</div>
          </li>
        </ul>
      </div>

      <div className="shadow-full rounded-lg dark:bg-darkgray-9 bg-white py-4">
        <h1 className="font-bold px-4 sm:px-6  text-xl sm:text-2xl">
          {`<Activites/> 🤸🏻‍♂️`}
        </h1>

        <div className=" my-4 h-0.5 w-full dark:bg-darkgray-8 bg-darkwhite-9 "></div>

        <ul className="sm:px-16  py-1 px-7 font-normal text-lg flex flex-col gap-5">
          <li className="flex">
            <span className="mr-1">🎗</span>
            <div>
              Achieved Excellent Volunteer prize in Spring Volunteer campaign
              UIT 2019
            </div>
          </li>
        </ul>
      </div>

      <div className="flex my-10 mx-auto gap-7 select-none">
        <div className=" py-3 px-5 bg-white dark:bg-darkgray-9 rounded-xl font-semibold text-xl betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
          <Link href="/posts"> Posts</Link>
        </div>

        <div className=" p-3 bg-white dark:bg-darkgray-9 rounded-xl font-semibold text-xl  betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
