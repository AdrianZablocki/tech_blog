import axios from 'axios';

import ArticleFull from "@/components/articles/ArticleFull";

const getArticle = async (id) => {
  const  { data } = await axios.get(`${process.env.API_URL}/api/articles/${id}`);

  return data?.article;
}

const ArticlePage = async ({ params }) =>  {
  const article = await getArticle(params.id);

  return (
    <>
      <a href='/'>go back</a>
      <ArticleFull article={article} />
    </>
    )
}

export default ArticlePage;