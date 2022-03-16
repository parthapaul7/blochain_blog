import React from "react";
import allArticle from "../articles/section1.json"

const Sidebar = () => {
  return (
    <div className="w-[20vw] h-[calc(100vh-48px)] bg-gray-300 sticky top-12">
      <ul className="mt-10">
          {allArticle.map((e,i)=>{
             return <a key={i} href={`#${i}`} className="p-2 block" >{e.heading}</a> 
          })}
        
      </ul>
    </div>
  );
};

export default Sidebar;
