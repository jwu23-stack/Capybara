import express from 'express';
import path from 'path';
import sessions from 'express-session'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import apiv1Router from "./routes/api/v1/apiv1.js";

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
const oneDay = 1000 * 60 * 60 * 24

app.use(sessions({
  secret: "this is my secret key sdjfalkdjfdlsf",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false
}));

app.use(express.static(path.resolve(__dirname, "../frontend/build")))

app.use('/api/v1', apiv1Router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}: https://localhost:${PORT}`)
})

export default app;

