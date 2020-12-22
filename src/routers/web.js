import express from 'express';
import homePageController from '../controllers/homePageController';
 
let router = express.Router();

let initWebRouter = (app) => {
    router.get("/", homePageController.getHomepage);
    
    return app.use("/", router);
};

module.exports = initWebRouter; 