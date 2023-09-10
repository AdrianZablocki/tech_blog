import axios from 'axios';
import queryString from 'query-string';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import ListArticles from '@/components/articles/ListArticles';
import Search from '@/components/layouts/Search';

const getArticles = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page
  };
  const searchQuery = queryString.stringify(urlParams)

  const  { data } = await axios.get(`${process.env.API_URL}/api/articles?${searchQuery}`);

  return data;
}

const HomePage = async({ searchParams }) => {
  const articlesData = await getArticles(searchParams);

  return (
    <main className="container m-auto p-6">
      {/* <Search /> */}
      <ListArticles data={articlesData} />
    </main>
  )
}

export default HomePage;
