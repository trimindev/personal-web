import Link from "next/link";
import type { PostMeta } from "@/src/api";
import Image from "next/image";
import image from "../public/images/reduce.jpg";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="w-[650px] flex flex-col gap-y-3 select-none">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} passHref key={post.slug}>
          <li
            key={post.slug}
            className="dark:bg-darkgray-9 bg-white px-6 py-5 rounded-lg shadow-full flex justify-between  gap-x-3 cursor-pointer dark:hover:ring-violet-300 hover:ring-2 hover:ring-violet-700"
          >
            {/* w-[430px]  */}
            <div className="flex flex-col justify-between ">
              <div className="font-bold text-lg sm:text-2xl">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </div>

              <div className="inline-flex flex-wrap gap-x-2 dark:text-darkwhite-8 text-darkgray-11 text-xs sm:text-sm ">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${tag}`}>
                    <a className="p-0.5 dark:hover:bg-darkgray-10 hover:bg-darkwhite-9 hover:ring-1 dark:hover:ring-violet-300 hover:ring-violet-700  rounded-md ">
                      {" "}
                      {`#${tag}`}
                    </a>
                  </Link>
                ))}
              </div>

              <div className="text-xs mt-4 inline-flex gap-x-2 dark:text-darkwhite-8 text-darkgray-11">
                <span>
                  {new Date(post.date).getDate()}/
                  {new Date(post.date).getMonth()}/
                  {new Date(post.date).getFullYear()}
                </span>
                <span className="flex items-center justify-center ">
                  <div className="w-[4px] h-[4px] bg-darkgray-11 dark:bg-darkwhite-8 rounded-full"></div>
                </span>
                <span>{post.time} min read</span>
              </div>
            </div>

            <div className="w-[160px] h-[120px] bg-darkgray-9 rounded-lg overflow-hidden hidden sm:block">
              <Image
                src={image}
                width={160}
                height={120}
                alt=""
                className="object-cover cursor-pointer "
              />
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
