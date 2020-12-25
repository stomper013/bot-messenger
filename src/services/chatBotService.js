require("dotenv").config();
import request from "request";
import homepageService from "./homePageService";

const PAGE_ACCESS_TOKEN = process.env.FB_PAGE_TOKEN;
const PRIMARY_RECEIVER_ID = process.env.FACEBOOK_APP_ID;

let sendMessageWelcomeNewUser = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let username = await homepageService.getFacebookUsername(sender_psid);
            //send text message
            let response1 = {
                "text": `Hi ${username}! Welcome to FShare, where you will find what you need.`
            };

            //send an image
            let response2 = {
                "attachment": {
                    "type": "image",
                    "payload": {
                        "url": "https://bit.ly/imageWelcome"
                    }
                }
            };

            let response3 = {
                "text": "At any time, use the menu below to navigate through the features."
            };

            await sendMessage(sender_psid, response1);
            await sendMessage(sender_psid, response2);
            await sendMessage(sender_psid, response3);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    sendMessageWelcomeNewUser: sendMessageWelcomeNewUser,
}