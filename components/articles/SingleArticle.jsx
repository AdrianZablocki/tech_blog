import Image from "next/image";
import * as dayjs from 'dayjs'

import styles from './SingleArticle.module.css';

const SingleArticle = ({ article }) =>  (
  <article className="grid gap-2 grid-cols-5 mb-10">
    <Image
      src={article.imageUrl}
      alt="product anme"
      height="240"
      width="240"
      priority={true}
      className="col-start-1 col-end-2 pr-2"
    />
    <div className="col-start-2 col-end-5 font-serif">
      <div className={`${styles.familyNutino} mb-4`}>
        <span className="text-red-600 font-extrabold text-lg underline">{article.author}</span>
        <span className="font-light italic text-base"> wrote</span>
        <h2 className="font-extrabold text-2xl">{article.title}</h2>       
      </div>
      <div>
        <p className={`${styles.familyNutino} text-gray-600`}>
          <span>{dayjs(article.date).format('MMMM D, YYYY')} - </span>
          {article.mainContent}
        </p>
      </div>
      <a className={`${styles.familyNutino} text-blue-700 font-extrabold text-lg underline mt-4 inline-block`} href="">Read more...</a>
    </div>
    <div className="col-start-5 col-end-6">
    <i class="fa-solid fa-timer"></i>
      <p>{article.readTime}</p>
      <p>{article.comments.length}</p>
    </div>
  </article>
);

export default SingleArticle;