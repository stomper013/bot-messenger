import express from "express";
import homepageController from "../controllers/homePageController";
import bodyParser from 'body-parser';
import * as chatBotController from "../controllers/chatBotController";

let router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

let initWebRoutes = (app)=> {
    router.get("/", homepageController.getHomepage);
    router.get("/webhook", chatBotController.getWebhook);
    router.post("/webhook", chatBotController.postWebhook);

    return app.use("/", router);
};

module.exports = initWebRoutes;