import React from "react";
import allArticle from "../../shared/articles.json";

const Sidebar = () => {
  return (
    <div className="w-[20vw] h-[calc(100vh-48px)] bg-white sticky top-12 opacity-90">
      <ul className="mt-10 mx-5 overflow-hiddener">
        {allArticle.map((e, i) => {
          return (
            <li className="p-2 overflow-hidden">
              &#x25B8;{" "}
              <a key={i} href={`#${i}`} >
                {e.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
