import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { getPostFromSlug, getSlugs, PostMeta } from "../api/mdxApi";
import YouTube from "components/YouTube";
import "highlight.js/styles/atom-one-dark.css";
import Link from "next/link";
import PostImage from "components/PostImage";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="mx-auto max-w-[840px] layout__post py-8 sm:py-10 px-3 sm:px-14 -translate-y-8  sm:translate-y-0  flex flex-col overflow-hidden">
        <h1 className="text-3xl sm:text-5xl">{post.meta.title}</h1>
        <div className="text-[0.6rem] text-xs sm:text-xs mt-4 ml-0.5 inline-flex gap-x-2 dark:text-darkwhite-8 text-darkgray-11">
          <span>{post.meta.date}</span>

          <span className="flex items-center justify-center ">
            <div className="w-[4px] h-[4px] bg-darkgray-11 dark:bg-darkwhite-8 rounded-full"></div>
          </span>
          <span>{post.meta.time} min read</span>
        </div>
        <div className="inline-flex flex-wrap gap-x-2 dark:text-darkwhite-8 text-darkgray-11 text-base sm:text-lg py-3 sm:py-4 ">
          {post.meta.tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`}>
              <a className="py-0.5 px-1  dark:betterhover:hover:bg-darkgray-10 betterhover:hover:bg-darkwhite-9 betterhover:hover:ring-2 dark:betterhover:hover:ring-violet-400 betterhover:hover:ring-violet-700  rounded-md ">
                {" "}
                {`#${tag}`}
              </a>
            </Link>
          ))}
        </div>
        <div className="post">
          <MDXRemote {...post.source} components={{ YouTube, PostImage }} />
        </div>
      </div>
      <div className="flex sm:my-10 w-full justify-center gap-7 select-none">
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
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        // @ts-ignore
        rehypeSlug,
        // @ts-ignore
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        // @ts-ignore
        rehypeHighlight,
      ],
    },
  });
  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
