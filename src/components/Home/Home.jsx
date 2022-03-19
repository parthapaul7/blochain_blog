import { useState } from "react";
import articleData from "../../shared/articles.json";

const Home = () => {
  return (
    <main className="w-[80vw] bg-white">
      {articleData.map((e, i) => {
        return (
          <div key={i} id={i} className="border-b-2 border-black border-dotted text-left m-5 p-5 ">
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
            className="text-red-500 cursor-pointer text-xl"
          >
            Show Less
          </div>
        </>
      ) : (
        <>
          <article>
            {article.metaDesc.substring(0, 500)}
            <div
              onClick={handleFullArticle}
              className="text-green-600 cursor-pointer text-xl py-5"
            >
              Read More
            </div>
          </article>
        </>
      )}
    </>
  );
};

export default Home;
