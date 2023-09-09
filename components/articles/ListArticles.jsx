import SingleArticle from "@/components/articles/SingleArticle";
import CustomPagination from '@/components/layouts/CustomPagination';

const ListArticles = ({ data }) => {
  console.log(data)
  return (
    <>
    {data?.articles?.map((item, index) => <SingleArticle key={`article_${index}`} article={item}/>)}
      <CustomPagination
        resPerPage={data?.resPerPage}
        articlesCount={data?.filteredArticlesCount}
      />
    </>
  );
};

export default ListArticles;