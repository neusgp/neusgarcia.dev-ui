import React from "react";
import { Link } from "react-router-dom";

import { PostAttributes } from "../lib/types";
import { getFormatedDate } from "../lib/getFormatedDate";

export const PostPreview = ({
  postId,
  postProps,
}: {
  postId?: number;
  postProps: PostAttributes;
}) => {
  const { date, imageUrl, title } = postProps;
  return (
    <div
      id="PostPreview"
      className="hover:opacity-[80%] transition-opacity duration-400"
      key={postId}
    >
      <Link to={`/posts/${postId}`} className="hover:text-[#333333]">
        <p className="border-solid border-b-2 border-pink-100">
          {date && getFormatedDate(date)}
        </p>
        <h2 className="py-2">{title}</h2>
        {imageUrl && <img className="rounded-sm" src={imageUrl} alt="main" />}
      </Link>
    </div>
  );
};
