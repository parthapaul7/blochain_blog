import { useState } from "react";
import articleData from "../articles/section1.json";

const Home = () => {
  return (
    <main className="w-[80vw]">
      {articleData.map((e, i) => {
        return (
          <div key={i} id={i} className="bg-gray-200 text-left m-5 p-5">
            <div className="text-2xl my-5">{e.heading}</div>
            <FullArticle article={e} />
          </div>
        );
      })}
    </main>
  );
};

const FullArticle = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFullArticle = () => {
    setIsExpanded(!isExpanded);
  };

  function createMarkup(content) {
    return { __html: content };
  }
  return (
    <>
      {isExpanded ? (
        <>
          <div dangerouslySetInnerHTML={createMarkup(article.desc)}></div>{" "}
          <br />
          <div
            onClick={handleFullArticle}
            className="text-red-500 cursor-pointer"
          >
            show less
          </div>
        </>
      ) : (
        <>
          <article>
            {article.metaDesc.substring(0, 500)}
            <span
              onClick={handleFullArticle}
              className="text-green-600 cursor-pointer"
            >
              ....Read More......
            </span>
          </article>
        </>
      )}
    </>
  );
};

export default Home;
