const Article = require('../models/articleModel');

// Получить все статьи
const getAllArticles = (req, res) => {
  Article.getAllArticles((err, articles) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка при получении статей' });
    }
    res.json(articles);
  });
};

// Получить статью по ID
const getArticleById = (req, res) => {
  const articleId = req.params.id;
  Article.getArticleById(articleId, (err, article) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка при получении статьи' });
    }
    if (!article) {
      return res.status(404).json({ message: 'Статья не найдена' });
    }
    res.json(article);
  });
};

module.exports = {
  getAllArticles,
  getArticleById
};
