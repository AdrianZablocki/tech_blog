import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import ListArticles from '@/components/articles/ListArticles';

config.autoAddCss = false

const getArticles = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    categories: searchParams.categories
  };
  const searchQuery = queryString.stringify(urlParams)

  const  { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?${searchQuery}`);

  return data;
}

const HomePage = async({ searchParams }) => {
  const articlesData = await getArticles(searchParams);

  return (
    <main className="container m-auto p-6">
      <ListArticles data={articlesData} />
    </main>
  )
}

export default HomePage;
