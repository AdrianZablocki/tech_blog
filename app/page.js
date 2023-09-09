import ListArticles from '@/components/articles/ListArticles';
import Search from '@/components/layouts/Search';
import axios from 'axios';

const getArticles = async () => {
  const  { data } = await axios.get(`${process.env.API_URL}/api/articles`);

  return data;
}

const HomePage = async() => {
  const articlesData = await getArticles();

  return (
    <main className="grid grid-cols-3 p-4">
      <Search />
      <ListArticles data={articlesData} />
    </main>
  )
}

export default HomePage;
