const express = require('express');

const exerciseRouter = require('./routes/exerciseRoutes');

const app = express();

app.use(express.json());

// app.use('/api/v1/users');
app.use('/api/v1/exercises', exerciseRouter);

module.exports = app;
