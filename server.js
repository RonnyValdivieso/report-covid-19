import express from 'express';
import serveStatic from 'serve-static';
const path = require('path');
const port = process.env.PORT || 80;

express()
	.use(serveStatic(path.join(__dirname, 'dist')))
	.listen(port);