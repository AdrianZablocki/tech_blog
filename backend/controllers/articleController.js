import Article from '../models/article';

export const newArticle = async(req, res, next) => {
  const article = await Article.create(req.body);

  res.status(201).json({ article });
}

export const getArticles = async(req, res, next) => {
  const articles = await Article.find();

  res.status(200).json({ articles });
}