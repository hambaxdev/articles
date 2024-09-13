const db = require('../config/db');

// Получить все статьи
const getAllArticles = (callback) => {
  const query = 'SELECT * FROM articles';
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Получить статью по ID
const getArticleById = (id, callback) => {
  const query = 'SELECT * FROM articles WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results.length ? results[0] : null);
  });
};

module.exports = {
  getAllArticles,
  getArticleById
};
