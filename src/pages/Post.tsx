import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PostHeader } from "../components/PostHeader";
import { PostBody } from "../components/PostBody";
import { useFetchPost } from "../hooks/useFetchPost";

export const Post = () => {
  const { id } = useParams();
  const {
    data: post,
    error,
    loading,
  } = useFetchPost(
    `https://neusgarcia-dev-backend.onrender.com/api/posts/${id}`
  );
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const hasPost = !loading && !!post?.attributes;
    if (!hasPost) {
      setTimeout(() => {
        setLoader(true);
      }, 1000);
    }
    if (hasPost) setLoader(false);
  }, [loading, post]);

  if (error)
    return (
      <p className="py-8 px-10 md:px-20">
        Hmm... looks like something went wrong. You can come by another time!
      </p>
    );

  const isLoading = loading && loader;

  return (
    <>
      <div className="py-8 px-10 md:px-20 animate-fade">
        {isLoading && (
          <p className="py-8 px-10 md:px-20 animate-fade">Loading...</p>
        )}
        {post?.attributes && (
          <>
            <PostHeader
              title={post?.attributes.title}
              date={post?.attributes.date}
              location={post?.attributes.location}
            />
            <PostBody
              body={post?.attributes.body}
              imageUrl={post?.attributes.imageUrl}
            />
          </>
        )}
      </div>
    </>
  );
};
