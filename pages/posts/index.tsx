import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/components/Articles";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="flex gap-x-4 justify-center lg:justify-between ">
      <Articles posts={posts} />

      <div className="w-[300px] bg-white dark:bg-darkgray-9 h-48 hidden lg:inline-block rounded-md select-none"></div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
