import Project from "@/components/Project";
import Link from "next/link";
import React from "react";

import meta from "data/projects/meta.json";

export interface MetaProject {
  img: String;
  title: String;
  tags: String[];
  github: string;
  link: string;
}

function Projects() {
  const metaProjects: MetaProject[] = JSON.parse(JSON.stringify(meta));

  console.log(metaProjects);

  return (
    <div>
      <div className="pt-5 px-2 sm:px-6  select-none flex flex-col lg:flex-row flex-wrap gap-7">
        {metaProjects.map((metaProject?) => (
          <Project
            img={metaProject.img}
            title={metaProject.title}
            tags={metaProject.tags}
            github={metaProject.github}
            link={metaProject.link}
            key=""
          />
        ))}
      </div>

      <div className="flex mt-20 w-full justify-center gap-7 select-none">
        <div className=" p-3 bg-white dark:bg-darkgray-9 rounded-xl font-semibold text-xl betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
          <Link href="/"> About Me</Link>
        </div>

        <div className=" p-3 sm:mr-5 bg-white dark:bg-darkgray-9 rounded-xl font-semibold text-xl  betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
          <Link href="/posts">Posts</Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
