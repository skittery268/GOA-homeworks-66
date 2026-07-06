const passport = require("passport");
const User = require("../models/user.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ googleId: profile.id });

                if (!user) {
                    user = await User.findOne({ email: profile.emails[0].value });

                    if (!user) {
                        user = await User.create({
                            googleId: profile.id,
                            fullname: profile.displayName,
                            email: profile.emails[0].value,
                            provider: "google"
                        });
                    } else {
                        user.googleId = profile.id;
                        user.provider = "google";

                        await user.save();
                    };
                }

                done(null, user);
            } catch (err) {
                done(err);
            }
        }
    )
);