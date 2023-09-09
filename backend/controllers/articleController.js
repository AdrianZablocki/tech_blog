import Article from '../models/article';

export const newArticle = async(req, res, next) => {
  const article = await Article.create(req.body);

  res.status(200).json({ article });
}