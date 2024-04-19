import crypto from "crypto";
import passport from "passport"
import { Strategy } from "passport-google-oauth20";
import { createUser, getUserByEmail } from "../../models/user.model";

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser((user, done) => {
    done(null, user as Express.User);
})

passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    callbackURL: process.env.GOOGLE_REDIRECT_URL ?? "",
    passReqToCallback: true,
    scope: ['profile', 'email']
}, async (requset, accessToken, refreshToken, profile, done) => {
    try {
        const existing = await getUserByEmail({ email: profile._json.email });
        if (existing) {
            done(null, existing);
        } else {
            const user = await createUser({
                username: profile.displayName,
                email: profile._json.email ?? "",
                profile: profile.profileUrl,
                password: crypto.randomUUID()
            })
            done(null, user);
        }
    } catch (error) {
        const err = error as Error;
        done(err, undefined);
    }
}));

export default passport;