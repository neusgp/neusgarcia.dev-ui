import React from "react";
import ReactMarkdown from "react-markdown";
import parse from 'html-react-parser'

export const PostBody = ({
  body,
  imageUrl,
  html,
}: {
  body: string;
  imageUrl: string;
  html?: string;
}) => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-10 flex flex-col-reverse">
      <div className="md:col-span-2 text space-y-12">
       <div><ReactMarkdown children={body} /></div>
        <div className="md:w-[600px]">{html && parse(html)}</div>
      </div>
      <div className="md:col-span-1 md:mb-0 mb-8">
        <img src={imageUrl} alt="blog foto" className="rounded-sm" />
      </div>  
    </div>
  );
};
