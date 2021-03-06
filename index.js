const express = require('express');
const bodyParser = require('body-parser');
//import proxySetup from './setupProxy.js';
const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');


const app = express();

app.use(bodyParser.json());
app.use('/', express.static(__dirname));
app.use('/listing/*',
  createProxyMiddleware({
    target: 'http://localhost:3004',
    secure: false
  }));


const PORT = 3010;


app.listen(PORT);
