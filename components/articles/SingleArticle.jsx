import Image from "next/image";

const SingleArticle = ({ article }) => {

  console.log('SINGLE ARTIVCLE', article)
  return (
    <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5 col-start-2 col-end-4">
      <h2>{article.title}</h2>
      <Image
        src={article.imageUrl}
        alt="product anme"
        height="240"
        width="240"
        priority={true}
      />
      <p>{article.mainContent}</p>
      <p>{article.author}</p>
      <p>{article.date}</p>
    </article>
  );
};

export default SingleArticle;