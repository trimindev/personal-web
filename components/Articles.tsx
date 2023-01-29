import Link from "next/link";
import type { PostMeta } from "../pages/api/mdxApi";
import Image from "next/image";
import images from "../data/posts/export";
export default function Articles({
  posts,
  slug,
}: {
  posts: PostMeta[];
  slug?: string;
}) {
  return (
    <ul className="flex flex-col gap-y-3 select-none">
      <h1 className="text-2xl pb-2 ml-1"> {slug ? `#${slug}` : "My posts"}</h1>
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} passHref key={post.slug}>
          <li
            key={post.slug}
            className="px-4 sm:px-6 py-4 sm:py-5 rounded-lg flex justify-between dark:betterhover:hover:ring-violet-300 betterhover:hover:ring-2 betterhover:hover:ring-violet-700 lg:betterhover:hover:scale-105 duration-100 cursor-pointer layout__post "
          >
            {/* w-[430px]  */}
            <div className="flex flex-col  sm:w-2/3  justify-between ">
              <Link href={`/posts/${post.slug}`}>
                <a>
                  <h1>{post.title}</h1>
                </a>
              </Link>

              <div className="inline-flex flex-wrap gap-x-2 -translate-x-0.5 dark:text-darkwhite-8 text-darkgray-11 text-xs sm:text-sm ">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${tag}`}>
                    <a className="py-0.5 px-1  dark:betterhover:hover:bg-darkgray-10 betterhover:hover:bg-darkwhite-9 betterhover:hover:ring-1 dark:betterhover:hover:ring-violet-400 betterhover:hover:ring-violet-700  rounded-md ">
                      {`#${tag}`}
                    </a>
                  </Link>
                ))}
              </div>

              <div className="text-[0.6rem] sm:text-xs mt-4 ml-0.5 inline-flex gap-x-2 dark:text-darkwhite-8 text-darkgray-11">
                <span>{post.date}</span>
                <span className="flex items-center justify-center ">
                  <div className="w-[4px] h-[4px] bg-darkgray-11 dark:bg-darkwhite-8 rounded-full"></div>
                </span>
                <span>{post.time} min read</span>
              </div>
            </div>

            <div className="w-[160px] h-[120px] rounded-lg overflow-hidden hidden sm:inline-block">
              <Image
                // @ts-ignore
                src={images[`${post.img}`]}
                width={160}
                height={120}
                alt=""
                className="object-cover  cursor-pointer "
              />
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
