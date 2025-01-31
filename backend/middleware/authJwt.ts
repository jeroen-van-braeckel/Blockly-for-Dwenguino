import jwt from "jsonwebtoken"
import db from "../config/db.config.js"
import jwt_settings from "../config/jwt.config.js";
import { User } from "../models/user.model.js"
import { Role } from "../models/role.model.js"
import { platform } from "os";


let verifyToken = (req, res, next) => {
    verifyTokenWithRedirect(req, res, next, ((requ, resp) => {
        let originalTarget = requ.originalUrl;
        let originalQuery = new URLSearchParams(requ.query).toString()
        let originalRequestInfo = JSON.stringify({originalTarget: originalTarget, originalQuery: originalQuery})
        res.loggedIn = false
        return resp.redirect(`/dashboard?originalRequestInfo=${originalRequestInfo}`)
    }))
}

/**
 * Verifies if user is logged in if not send 401 (Unauthorized)
 * If the token is valid, add the userId and platform parameter to req
 * @param req 
 * @param res 
 * @param next 
 */
let verifyTokenAjax = (req, res, next) => {
    verifyTokenWithRedirect(req, res, next, ((requ, resp) => {
        resp.loggedIn = false;
        return resp.status(401).send()
    }))
}

let verifyTokenWithRedirect = (req, res, next, redirectAction) => {
    let token  = req.session.token;
    if (!token) {
        return redirectAction(req, res)
        //return res.status(403).send({message: "No token provided"}); // TODO: redirect to login page
    }
    jwt.verify(token, jwt_settings.secret, (err, decoded) => {
        if (err) {
            return redirectAction(req, res)
        }
        req.userId = decoded?.id;
        req.platform = decoded?.platform;
        res.loggedIn = true
        next();
    })
}

let verifyUserExists = (req, res, next) => {
    User.findOne({
        platform: req.platform,
        userId: req.userId
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: "Error during login" });
            return
        }
        if (!user){
            res.status(401).send("User does not exist!")
            return
        }
        next();
        return
    })
}
 
// Returns a middleware function that checks if a user has a specific role.
/**
 * Checks if the user has a certain role. If not send 403 (Forbidden)
 * @param role 
 * @returns 
 */
let roleCheck = (role) => {
    return (req, res, next) => {
        User.findOne({
            userId: req.userId, 
            platform: req.platform})
        .exec((err, user) => {
            if (err || !user){
                res.status(500).send("User does not exist")
            }
            for (let i = 0; i < user.roles.length; i++) {
                if (user.roles[i].name === role) {
                next();
                return;
                }
            }
            res.status(403).send({ message: "You do not have the authority to access this route!" });
            return;
        });
  }
}

export { verifyToken, verifyTokenAjax, roleCheck, verifyUserExists }