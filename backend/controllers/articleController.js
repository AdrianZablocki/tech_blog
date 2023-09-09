import Article from '../models/article';
import APIFlters from '../utils/APIFilters';

export const getArticles = async(req, res, next) => {
  const resPerPage = 2;
  const articlesCount = await Article.estimatedDocumentCount();

  const apiFilters = await new APIFlters(Article.find(), req.query)
    .search()
    .filter();

  let articles = await apiFilters.query;
  const filteredArticlesCount = articles.length;

  apiFilters.pagination(resPerPage);

  articles = await apiFilters.query.clone();

  res.status(200).json({ 
    resPerPage,
    articlesCount,
    filteredArticlesCount,
    articles,
  });
}

export const newArticle = async(req, res, next) => {
  const article = await Article.create(req.body);

  res.status(201).json({ article });
}
