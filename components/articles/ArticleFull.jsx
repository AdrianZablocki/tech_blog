import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeLg } from '@fortawesome/free-solid-svg-icons';

const ArticleFull = ({ article }) =>  {
  console.log(article);
  return (
    <>
      <a href='/' className="flex items-center">
        <FontAwesomeIcon className="text-white w-4" icon={faHomeLg} /> 
      </a>
      <Image
        src={article.imageUrl}
        alt="article image"
        height="240"
        width="240"
        priority={true}
        className="col-start-1 col-end-2 pr-2"
      />
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.mainContent}</p>
      <p>{article.content}</p>
    </>
  )
}

export default ArticleFull;