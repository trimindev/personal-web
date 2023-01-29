import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className=" h-screen mt-60 mx-5">
      <div className="text-center font-semibold text-xl sm:text-3xl">
        Oops! page not found 😢
      </div>
      <div className="flex mt-20 flex-wrap w-full justify-center gap-4 select-none">
        <div className="p-3 bg-white dark:bg-darkgray-9 rounded-xl font-semibold  sm:text-xl betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
          <Link href="/"> About Me</Link>
        </div>

        <div className=" p-3 bg-white dark:bg-darkgray-9 rounded-xl font-semibold sm:text-xl  betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
          <Link href="/posts">Posts</Link>
        </div>

        <div className=" p-3 bg-white dark:bg-darkgray-9 rounded-xl font-semibold sm:text-xl betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
          <Link href="/">Projects</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
