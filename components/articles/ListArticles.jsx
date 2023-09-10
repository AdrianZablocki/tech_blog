import ArticleShort from "@/components/articles/ArticleShort";
import CustomPagination from '@/components/layouts/CustomPagination';

const ListArticles = ({ data }) => {
  return (
    <>
    {data?.articles?.map((item, index) => <ArticleShort key={`article_${index}`} article={item}/>)}
      <CustomPagination
        resPerPage={data?.resPerPage}
        articlesCount={data?.filteredArticlesCount}
      />
    </>
  );
};

export default ListArticles;