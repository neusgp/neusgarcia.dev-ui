import React, { useEffect, useState } from "react";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { PostContent } from "../lib/types";
import { PostPreview } from "../components/PostPreview";

import { getPostsGridColumns } from "../lib/getPostsGridColumns";

const PostsGridColumn = ({ data }: { data: PostContent[] }) => (
  <div>
    {data.map((post: PostContent) => {
      return (
        <PostPreview
          key={post.id}
          postId={post.id}
          postProps={post.attributes}
        />
      );
    })}
  </div>
);

export const PostsGrid = ({
  data: posts,
  isMobile,
}: {
  data: PostContent[];
  isMobile: boolean;
}) => {
  const { firstCol, secondCol, thirdCol, fourthCol } =
    getPostsGridColumns(posts);

  return (
    <>
      {isMobile ? (
        <PostsGridColumn data={posts} />
      ) : (
        <div className="grid grid-cols-4 gap-4">
          <PostsGridColumn data={firstCol} />
          <PostsGridColumn data={secondCol} />
          <PostsGridColumn data={thirdCol} />
          <PostsGridColumn data={fourthCol} />
        </div>
      )}
    </>
  );
};

export const Homepage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  //TODO: clean up this component pleaseee
  // maybe do 2 different components, think about the structure
  const {
    data: posts,
    error,
    loading,
  } = useFetchPosts("https://neusgarcia-dev-backend.onrender.com/api/posts");

  useEffect(() => {
    setIsMobile(window.innerWidth <= 760);

    const hasPosts = !loading && !!posts;
    if (hasPosts) {
      setTimeout(() => {
        setLoader(true);
      }, 1000);
    }
    if (!hasPosts) setLoader(false);
  }, [loading, posts]);

  if (error)
    return (
      <p className="py-8 px-10 md:px-20">
        Hmm... looks like something went wrong. You can come by another time!
      </p>
    );

  const isPostsArray = Array.isArray(posts);
  const isLoading = loading && loader;

  return (
    <>
      <div className="py-8 px-10 md:px-20 animate-fade">
        {/* place for something else maybe? */}
        {isLoading && (
          <p className="py-8 px-10 md:px-20 animate-pulse">Loading...</p>
        )}
        {isPostsArray && <PostsGrid data={posts} isMobile={isMobile} />}
      </div>
    </>
  );
};
