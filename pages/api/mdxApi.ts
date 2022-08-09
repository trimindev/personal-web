import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  img: string;
  slug: string;
  title: string;
  time: number;
  tags: string[];
  date: string;
}

const POSTS_PATH = path.join(process.cwd(), "data/posts/MDX");

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      // if (a.meta.date > b.meta.date) return 1;
      // if (a.meta.date < b.meta.date) return -1;
      // return 0;

      var aa = a.meta.date.split("/").reverse().join(),
        bb = b.meta.date.split("/").reverse().join();
      return aa < bb ? 1 : aa > bb ? -1 : 0;
    });

  return posts;
};

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  // const dateArr = data.date.split("/");

  // const date = new Date(+dateArr[2], +dateArr[0], +dateArr[1]);

  // console.log(date);

  return {
    content,
    meta: {
      slug,
      img: data.img,
      title: data.title ?? slug,
      time: data.time,
      tags: (data.tags ?? []).sort(),
      date: data.date ?? data.date,
    },
  };
};
