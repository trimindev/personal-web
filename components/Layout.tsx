import Link from "next/link";
import React, { ReactNode, useCallback } from "react";
import Articles from "./Articles";
import Footer from "./Footer";
import Navbar from "./Navbar";
import YouTube from "./YouTube";

function Layout({ children }: { children: ReactNode }) {
  const tags = [
    "interview",
    "algorithm",
    "leetcode",
    "reactjs",
    "nextjs",
    "typescript",
    "javascript",
    "tailwindcss",
    "git",
    "docker",
    "html",
    "css",
  ];
  return (
    <div className=" flex gap-x-4   justify-center lg:justify-between ">
      <div className="w-full md:w-[650px]">{children}</div>

      <div className="w-[300px] hidden lg:flex flex-col gap-5 select-none duration-100">
        <h1>Tags</h1>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Link href={`/tags/${tag}`} key={tag}>
              <a className="p-2 rounded-lg bg-white dark:bg-darkgray-9 ring-violet-500 dark:ring-violet-400 hover:ring-2">{`#${tag}`}</a>
            </Link>
          ))}
        </div>
        <div>
          <h1>Just for fun</h1>
          <YouTube id="314OLE6mKOo" />
          <YouTube id="YZ5tOe7y9x4" />
          <YouTube id="L-6DamNEkok" />
          <YouTube id="EC-FPKmFxr4" />
          <YouTube id="wxXGb1Krj3Q" />
        </div>
      </div>
    </div>
  );
}

export default Layout;
