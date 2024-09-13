const express = require('express');
const articleRoutes = require('../routes/articleRoutes');

const app = express();

// Маршруты
app.use('/api', articleRoutes);

module.exports = app;
