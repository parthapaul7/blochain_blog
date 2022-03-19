import React from "react";
import allArticle from "../../shared/articles.json"


const Sidebar = () => {
  return (
    <div className="w-[20vw] h-[calc(100vh-48px)] bg-white sticky top-12 opacity-90">
      <ul className="mt-10 mx-5 overflow-hiddener">
          {allArticle.map((e,i)=>{
             return <a key={i} href={`#${i}`} className="p-2 block" >{e.heading}</a> 
          })}
        
      </ul>
    </div>
  );
};

export default Sidebar;
