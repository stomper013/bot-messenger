
require("dotenv").config();
import express from 'express';
import viewEngine from './config/viewEngine';
import initWebRouter from './routers/web';
import bodyParser from 'body-parser';

let app = express();

viewEngine(app);

initWebRouter(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Run with port: ${port}`);
})