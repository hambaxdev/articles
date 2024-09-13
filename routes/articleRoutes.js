const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

// Маршрут для получения всех статей
router.get('/articles', articlesController.getAllArticles);

// Маршрут для получения статьи по ID
router.get('/articles/:id', articlesController.getArticleById);

module.exports = router;
