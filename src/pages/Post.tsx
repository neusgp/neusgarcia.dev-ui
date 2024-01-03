import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import { PostHeader } from "../components/PostHeader";
import { PostBody } from "../components/PostBody";

export const Post = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    `https://neusgarcia-dev-backend.onrender.com/api/posts/${id}`
  );

  const isSinglePost = !!data && !Array.isArray(data);
  const post = isSinglePost && !!data.attributes;

  if (!post || loading)
    return (
      <div className="py-8 px-10 md:px-20 animate-pulse">
        <p>Loading...</p>
      </div>
    );

  const { title, date, location, body, imageUrl } = data.attributes;

  return (
    <>
      <div className="py-8 px-10 md:px-20 animate-fade">
        {!!error && (
          <p>
            Hmm... looks like something went down. You can come by another time!
          </p>
        )}
        {!loading && !error && (
          <>
            <PostHeader title={title} date={date} location={location} />
            <PostBody body={body} imageUrl={imageUrl} />
          </>
        )}
      </div>
    </>
  );
};
