// import React from "react";

import SingleArticle from "@/components/articles/SingleArticle";
import Image from "next/image";

const ListArticles = ({ data }) => (
  data?.articles?.map((item, index) => <SingleArticle key={`article_${index}`} article={item}/>)
);

export default ListArticles;