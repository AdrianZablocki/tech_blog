// import React from "react";

import Image from "next/image";

const ListArticles = ({ data }) => {

  // console.log(data);

  const { articles } = data;
  const list = articles?.map((item, index) => 
  <article key={`article_${index}`} className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5 col-start-2 col-end-4">
  
      {item.author}

      <h2>{item.title}</h2>
      <Image
        src={item.imageUrl}
        alt="product anme"
        height="240"
        width="240"
        priority={true}
      />
      <p>{item.content}</p>
   
  </article>
  );
  console.log(articles[0]);
  return list;
};

export default ListArticles;