import { getAllPosts, PostMeta } from "../api/mdxApi";
import Articles from "@/components/Articles";
import Layout from "@/components/Layout";
import Link from "next/link";
import YouTube from "@/components/YouTube";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="px-2 pt-2 sm:pt-0 lg:px-6">
      <Layout>
        <Articles posts={posts} />

        <div className="flex w-full flex-col">
          <h1 className="text-2xl pt-5 ml-1 my-2 ">My videos</h1>
          <YouTube id="WFkFPLjTvwU" />
          <YouTube id="kwRyJrlrmgw" />
        </div>

        <div className="flex my-10 w-full justify-center gap-7 select-none ">
          <div className=" p-3 bg-white dark:bg-darkgray-9 rounded-xl font-semibold text-xl betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
            <Link href="/"> About Me</Link>
          </div>

          <div className=" p-3 sm:mr-5 bg-white dark:bg-darkgray-9 rounded-xl font-semibold text-xl  betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
            <Link href="/projects">Projects</Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
