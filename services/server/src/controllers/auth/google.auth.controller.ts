import passport from "passport";
export const signInWithGoogle = passport.authenticate('google', { scope: ['profile', 'email'] });