import React from "react";
import { getFormatedDate } from "../lib/getFormatedDate";

export const PostHeader = ({
  title,
  date,
  location,
}: {
  title: string;
  date: string;
  location: string;
}) => {
  return (
    <div>
      <div>
        <p className="border-solid border-b-2 border-pink-100">
          {location}, {getFormatedDate(date)}
        </p>
      </div>

      <div className="py-4">
        <h2>{title}</h2>
      </div>
    </div>
  );
};
