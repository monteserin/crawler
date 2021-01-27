import express from 'express';
import http from 'http';
import Middlewares from './middlewares';
import Controllers from './controllers';

const app = express();
const port = process.env.PORT || 3005;

Middlewares(app);
Controllers(app);

const server = http.createServer(app);

server.listen(port, () => console.log(`Server listening to http://localhost:${port}`));