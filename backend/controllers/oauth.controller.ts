import GithubOAuthController from "./oauth.github.controller.js";
import OAuthState from "../datatypes/oauthState.js";
import db from "../config/db.config.js"
import LeerIdOAuthController from "./oauth.leerid.controller.js";
import ACMOAuthController from "./oauth.acm.controller.js";
import MockAuthController from "./oauth.mock.controller.js";

const oauthControllers = {}
const githubOAuthController = new GithubOAuthController();
const leerIdOAuthController = new LeerIdOAuthController();
const acmOAuthController = new ACMOAuthController();
const mockOAuthController = new MockAuthController();
oauthControllers[db.PLATFORMS.github] = githubOAuthController;
oauthControllers[db.PLATFORMS.leerId] = leerIdOAuthController;
oauthControllers[db.PLATFORMS.beACM] = acmOAuthController;
oauthControllers[db.PLATFORMS.test] = mockOAuthController;


class OAuthController {

    constructor(){

    }

    /**
     * This controller action is executed when a user presses the login button on our website.
     * It checks if the req.query.platform parameter exists and is a known platform.
     * Thereafter, it calls the login function of the respective OAuth provider.
     * @param req 
     * @param res 
     */
    login(req, res){
        let platform = req.query?.platform;
        let originalRequestInfo = req.query?.originalRequestInfo;
        if (!Object.values(db.PLATFORMS).includes(platform)){
            res.status(401).send({ message: "Selected platform not supported!" });
        }
        let state;
        if (originalRequestInfo){
            let reqInfo = JSON.parse(originalRequestInfo);
            state = new OAuthState(db.PLATFORMS[platform], reqInfo.originalTarget, reqInfo.originalQuery);
        } else {
            state = new OAuthState(db.PLATFORMS[platform]);
        }
        oauthControllers[state.platform].login(req, res, state);
    }

    /**
     * This controller action is executed on a redirect action from the OAuth provider
     * @param req 
     * @param res 
     */
    redirect(req, res) {
        console.log(req.query.state);
        console.log(JSON.parse(req.query?.state));
        let state = JSON.parse(req.query?.state)
        if (Object.values(db.PLATFORMS).includes(state.platform)){
            oauthControllers[state.platform].redirect(req, res, state);
        } else {
            res.status(401).send({ message: "Authentication failed! Unknown OAuth platform" });
        }
    }

    logout(req, res){
        let platform = req.platform
        req.session.token = null;
        res.redirect(`${process.env.SERVER_URL}/dashboard`)
        //oauthControllers[platform].logout(req, res)
        //res.status(200).send({message: "Logout successful"})
    }

    getPlatforms(req, res){
        res.json(db.PLATFORMS)
    }
}

export { OAuthController }