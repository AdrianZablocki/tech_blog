import React from 'react';
import axios from 'axios';
import mongoose from 'mongoose';
import { redirect } from 'next/navigation';

import ArticleFull from "@/components/articles/ArticleFull";

const getArticle = async (id) => {
  const  { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${id}`);

  return data?.article;
}

const ArticlePage = async ({ params }) =>  {
  const isValidId = mongoose.isValidObjectId(params?.id);

  if (!isValidId) {
    return redirect('/');
  }

  const article = await getArticle(params?.id);

  return <ArticleFull article={article} />
}

export default ArticlePage;