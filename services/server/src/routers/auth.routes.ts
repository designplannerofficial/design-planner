import express from "express";
import {
    signInWithGoogle,
    signInWithGoogleFailed,
    signInWithGoogleRedirect,
    signInWithGoogleSuccess
} from "../controllers";
const router = express.Router();

router.route('/oauth2/google').get(signInWithGoogle);
router.route('/oauth2/google/redirect').get(signInWithGoogleRedirect);
router.route('/oauth2/google/failed').get(signInWithGoogleFailed);
router.route('/oauth2/google/success').get(signInWithGoogleSuccess);

export default router;