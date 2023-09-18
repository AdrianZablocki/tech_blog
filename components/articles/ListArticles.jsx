import ArticleShort from '@/components/articles/ArticleShort';
import CustomPagination from '@/components/layouts/CustomPagination';
import NoArticlesFound from '@/components/articles/NoArticlesFound';

const ListArticles = ({ data }) => {
  return (
    <>
    {data?.articles?.map((item, index) => <ArticleShort key={`article_${index}`} article={item}/>)}
    {data?.articles.length === 0 
      ? <NoArticlesFound /> 
      : <CustomPagination
          resPerPage={data?.resPerPage}
          articlesCount={data?.filteredArticlesCount}
        />
      }
    </>
  );
};

export default ListArticles;