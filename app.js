/* eslint-disable import/no-extraneous-dependencies */
require('@babel/register');
require('dotenv').config();

const express = require('express');
const config = require('./config/serverConfig');

// Render
const mainRouter = require('./routes/render/main.routes');
const homeRouter = require('./routes/render/home.routes');
const cookieRouter = require('./routes/render/cookie.routes');
const sessionRouter = require('./routes/render/session.routes');

// API
const usersRouter = require('./routes/api/users.routes');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

// Render
app.use('/', mainRouter);
app.use('/cookie', cookieRouter);
app.use('/session', sessionRouter);
app.use('/home', homeRouter);

// API
app.use('/api', usersRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
