import axios from "axios";
import { Octokit } from 'octokit'
import AbstractOAuthController from "./abstract.oauth.controller.js";
import MinimalUserInfo from "../datatypes/minimalUserInfo.js";
import db from "../config/db.config.js"
import oauthConfig from "../config/oauth.config.js";



class GithubOAuthController extends AbstractOAuthController{
    constructor(){
        super(db.PLATFORMS.github);
    }


    /**
     * Github OAuth API redirects to this route when login is successful. 
     * Here we request the oauth token and user info.
     * @param {*} req 
     * @param {*} res 
     */
    redirect(req, res, authState) {
        super.redirect(req, res, authState) // Do general checks like nonce verification and platform check 
        // Get access token
        axios({
            method: "POST",
            url: oauthConfig.accessTokenUrlMap[authState.platform](req.query.code),
            headers: {
                Accept: "application/json"
            }
        }).then(async (response) => {
            // Get user info
            const octo = new Octokit({
                auth: response.data.access_token
            })
            try {
                let userInfo = await octo.request("GET /user", {});
                console.log(userInfo);
                let minUserInfo = new MinimalUserInfo(userInfo.data.id.toString(),
                    db.PLATFORMS.github, 
                    userInfo.data.name, 
                    "",
                    userInfo.data.email, 
                    [db.ROLES.student, db.ROLES.user])
                this.signin(req, res, minUserInfo, authState); // Call super class method to sign in
            } catch (err) {
                console.log(err);
                res.status(401).send({ message: "Authentication failed!" });
            }
        }).catch((err) => {
            res.status(401).send({ message: "Authentication failed!" });
        });
    }

    logout(req, res){
        res.status(200).send({message: "Logout successful"})  
    }
}


export default GithubOAuthController;





