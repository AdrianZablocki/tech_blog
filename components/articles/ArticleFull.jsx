import Image from "next/image";
import * as dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const ArticleFull = ({ article }) =>  {
  return (
    <article className="container m-auto p-6 nutino-light text-gray-600">
      <div className="flex items-center">
        <a href='/' className="mr-5">
          <FontAwesomeIcon className="text-red-600 w-4" icon={faArrowLeftLong} /> 
        </a>
        <span className="nutino-extra-bold text-red-600 text-md mr-3">{article.author}</span>
        <span className="nutino-extra-light-italic text-sm mr-3">{dayjs(article.date).format('MMM D, YYYY')}</span>
        <span className="nutino-extra-light text-sm">{article.comments.length} comments</span>
      </div>
      <h1 className="nutino-extra-bold text-black text-3xl mb-5">{article.title}</h1>
      <p className="mb-5 text-xl">{article.mainContent}</p>
    
      <Image
        src={article.imageUrl}
        alt="article image"
        height="600"
        width="600"
        priority={true}
        className="col-start-1 col-end-2 pr-2 mb-5"
      />
      <p>{article.content}</p>
    </article>
  )
}

export default ArticleFull;