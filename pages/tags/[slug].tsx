import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getAllPosts, PostMeta } from "../api/mdxApi";
import Articles from "@/components/Articles";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function TagPage({
  slug,
  posts,
}: {
  slug: string;
  posts: PostMeta[];
}) {
  return (
    <>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <div className="px-1 lg:px-6">
        <Layout>
          <Articles posts={posts} slug={slug} />
          <div className="flex my-10 w-full justify-center gap-7 select-none">
            <div className=" p-3 bg-white dark:bg-darkgray-9 rounded-xl font-semibold text-xl betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
              <Link href="/"> About Me</Link>
            </div>

            <div className=" p-3  bg-white dark:bg-darkgray-9 rounded-xl font-semibold text-xl  betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
              <Link href="/posts">Posts</Link>
            </div>
            <div className=" p-3 sm:mr-5 bg-white dark:bg-darkgray-9 rounded-xl font-semibold text-xl  betterhover:hover:ring-2 ring-violet-600 betterhover:hover:text-violet-800 dark:betterhover:hover:text-violet-300 dark:ring-violet-300 cursor-pointer">
              <Link href="/projects">Projects</Link>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
