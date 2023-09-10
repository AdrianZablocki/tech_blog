import Image from "next/image";
import * as dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';

const ArticleShort = ({ article }) =>  (
  <article className="grid gap-2 grid-cols-5 mb-16 pb-8 border-b border-slid">
    <Image
      src={article.imageUrl}
      alt="product anme"
      height="240"
      width="240"
      priority={true}
      className="col-start-1 col-end-2 pr-2"
    />
    <div className="col-start-2 col-end-5 font-serif">

      <div className="nutino-extra-bold mb-4">
        <span className="text-red-600 text-lg underline">{article.author}</span>
        <span className="nutino-extra-light-italic text-base"> wrote</span>
        <h2 className="text-2xl">{article.title}</h2>       
      </div>

      <div>
        <p className="nutino-light text-gray-600">
          <span className="nutino-extra-light-italic text-sm">{dayjs(article.date).format('MMMM D, YYYY')} - </span>
          {article.mainContent}
        </p>
      </div>

      <a 
        className="nutino-extra-bold text-blue-700 text-lg underline mt-4 inline-block" 
        href={`article?id=${article._id}`}
      >Read more...</a>

    </div>

    <div className="nutino-light text-gray-500 col-start-5 col-end-6 flex flex-col justify-start ml-6 text-sm">
      <div className="mb-2">
        <FontAwesomeIcon className="text-red-600 mr-2 w-5" icon={faCalendarDays} /> 
        <span>{article.readTime} min read</span>
      </div>
      <div className="">
        <FontAwesomeIcon className="text-red-600 mr-2 w-5" icon={faComments} /> 
        <span className="underline">{article.comments.length} comments</span> 
      </div>
    </div>

  </article>
);

export default ArticleShort;