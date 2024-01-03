import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
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
  data: allPosts,
  isMobile,
}: {
  data: PostContent[];
  isMobile: boolean;
}) => {
  const { firstCol, secondCol, thirdCol, fourthCol } =
    getPostsGridColumns(allPosts);

  return (
    <>
      {isMobile ? (
        <PostsGridColumn data={allPosts} />
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
  //TODO: clean up this component pleaseee
  // maybe do 2 different components, think about the structure
  const {
    data: allPosts,
    error,
    loading,
  } = useFetch(
    "https://neusgarcia-dev-backend.onrender.com/api/posts?populate=media"
  );

  useEffect(() => {
    setIsMobile(window.innerWidth <= 760);
  }, []);

  if (loading)
    return <p className="py-8 px-10 md:px-20 animate-pulse">Loading...</p>;
  if (error)
    return (
      <p className="py-8 px-10 md:px-20">
        Hmm... looks like something went down. You can come by another time!
      </p>
    );

  const isPostsArray = Array.isArray(allPosts);
  return (
    <div className="py-8 px-10 md:px-20 animate-fade">
      {/* place for something else maybe? */}
      {isPostsArray && <PostsGrid data={allPosts} isMobile={isMobile} />}
    </div>
  );
};
