import Image from "next/image";
import React from "react";
import postImages from "data/posts/export";

function PostImage({ src, r, w }: { src: string; r?: number; w?: number }) {
  // @ts-ignore
  const postImage = postImages[`${src}`];
  return (
    <div className="pb-3 sm:pb-5 flex justify-center">
      <Image
        src={postImage}
        alt={postImage}
        height={r ? (w ? w * r : undefined) : undefined}
        width={w}
        className="object-cover  object-top rounded-lg"
      />
    </div>
  );
}

export default PostImage;
