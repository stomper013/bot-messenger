require("dotenv").config();
import request from "request";

const PAGE_ACCESS_TOKEN = process.env.FB_PAGE_TOKEN;

let handleSetupProfileAPI = () => {
    return new Promise((resolve, reject) => {
        try {
            let url = `https://graph.facebook.com/v7.0/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`;
            let request_body = {
                "get_started": {
                    "payload": "GET_STARTED"
                },
            };
            // Send the HTTP request to the Messenger Platform
            request({
                "uri": url,
                "method": "POST",
                "json": request_body
            }, (err, res, body) => {
                if (!err) {
                    resolve("Done!")
                } else {
                    reject("Unable to send message:" + err);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

let getFacebookUsername = (sender_psid) => {
    return new Promise((resolve, reject) => {
        try {
            // Send the HTTP request to the Messenger Platform
            let url = `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`;
            request({
                "uri": url,
                "method": "GET",
            }, (err, res, body) => {
                if (!err) {
                    //convert string to json object
                    body = JSON.parse(body);
                    let username = `${body.last_name} ${body.first_name}`;
                    resolve(username);
                } else {
                    reject("Unable to send message:" + err);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    handleSetupProfileAPI: handleSetupProfileAPI,
    getFacebookUsername: getFacebookUsername,
};