// YourComponent.tsx
import React from "react";
import { articles } from "@/constants";
import { Link } from "react-router-dom";

const ArticleList: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="p-4 hover:bg-zinc-800 ease-in-out hover:shadow-md
            cursor-pointer rounded-2xl"
          >
            <p className="flex items-center py-2 small-regular text-zinc-500">
              <span className="pr-3 font-semibold">|</span>
              {article.date}
            </p>

            <h1 className="h3-regular mt-2 mb-3">{article.title}</h1>

            <p className="flex items-center py-2 text-zinc-500">
              {article.content}
            </p>

            <Link
              to={"/"}
              className="flex items-center mt-4 text-[13px] text-teal-500"
            >
              Read article
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticleList;
