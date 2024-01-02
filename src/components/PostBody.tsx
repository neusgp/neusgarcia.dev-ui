import React from "react";
import ReactMarkdown from "react-markdown";

export const PostBody = ({
  body,
  imageUrl,
}: {
  body: string;
  imageUrl: string;
}) => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-10 flex flex-col-reverse">
      <div className="md:col-span-2 text">
        <ReactMarkdown children={body} />
      </div>
      <div className="md:col-span-1 md:mb-0 mb-8">
        <img src={imageUrl} alt="blog foto" className="rounded-sm" />
      </div>
    </div>
  );
};
