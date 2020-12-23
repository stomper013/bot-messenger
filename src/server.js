require("dotenv").config();
import express from 'express';
import viewEngine from './config/viewEngine';
import initWebRouter from './routers/web';

let app = express();

viewEngine(app);

initWebRouter(app);

let port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Run with port: ${port}`);
})