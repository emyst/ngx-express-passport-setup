"use strict";

import { Router } from "express";

import { Passport } from "../server";
import * as userApi from "../controllers/user";

const router: Router = Router();
const frontEndOriginUrl = process.env.FRONTEND_URL;
const frontEndInitializeUrl = `${frontEndOriginUrl}/initialize`;


/**
 * @api {get} /google
 * @description Passport Google Authentication - Holds the redirection from your app to gmail login page.
 */
router.get("/google", Passport.authenticate("google", { scope: [ "profile", "email" ] }));


/**
 * @api {get} /google/callback
 * @description Handles the callback after google has authenticated the user.
 *
 * * @successRedirect 1 is enum value for Facebook. Facebook ang Google both uses localhost except for twitter 127.0.0.1.
 * This will be filtered out on Front End and set the base url as either localhost or 127.0.0.1 base on the enum id used.
 */
router.get("/google/callback", Passport.authenticate("google", {
  successRedirect: `${frontEndInitializeUrl}/1`,
  failureRedirect: "/"
}));


/**
 * @api {get} /facebook
 * @description Passport Facebook Authentication - Holds the redirection from your app to twitter login page.
 */
router.get("/facebook", Passport.authenticate("facebook", {
  scope : ["public_profile", "email", "user_gender"]
}));


/**
 * @api {get} /facebook/callback
 * @description Handles the callback after facebook has authenticated the user.
 *
 * * @successRedirect 2 is enum value for Facebook. Facebook ang Google both uses localhost except for twitter 127.0.0.1.
 * This will be filtered out on Front End and set the base url as either localhost or 127.0.0.1 base on the enum id used.
 */
router.get("/facebook/callback", Passport.authenticate("facebook", {
  successRedirect: `${frontEndInitializeUrl}/2`,
  failureRedirect: "/"
}));


/**
 * @api {get} /twitter
 * @description Passport Twitter Authentication - Holds the redirection from your app to twitter login page.
 */
router.get("/twitter", Passport.authenticate("twitter"));


/**
 * @api {get} /twitter/callback
 * @description Handles the callback after google has authenticated the user.
 *
 * @successRedirect 3 is enum value for Twitter. Facebook ang Google both uses localhost except for twitter 127.0.0.1.
 * This will be filtered out on Front End and set the base url as either localhost or 127.0.0.1 base on the enum id used.
 */
router.get("/twitter/callback", Passport.authenticate("twitter", {
  successRedirect: `${frontEndInitializeUrl}/3`,
  failureRedirect: "/"
}));


/**
 * @api {get} /login
 * @description Passport Local Authentication
 */
router.post("/login", userApi.login);


export const authRoutes: Router = router;