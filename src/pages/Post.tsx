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

  if (loading) return <p>loading...</p>;

  if (error) return <p>error</p>;

  const isSinglePost = !!data && !Array.isArray(data);
  const post = isSinglePost && !!data.attributes;

  if (!post) return <p>Sorry, I haven't found the post! :S</p>;

  const { title, date, location, body, imageUrl } = data.attributes;

  return (
    <div className="py-8 px-10 md:px-20">
      <PostHeader title={title} date={date} location={location} />
      <PostBody body={body} imageUrl={imageUrl} />
    </div>
  );
};
