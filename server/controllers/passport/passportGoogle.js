const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const UserModel = require("../../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      UserModel.findOne({ email: profile.emails[0].value }).then((user) => {
        if (user) {
          return callback(null, user);
        } else {
          UserModel({
            username: profile.emails[0].value,
            email: profile.emails[0].value,
            googleId: profile.id,
            password: null,
            provider: "google",
            isVerified: true,
          })
            .save()
            .then((data) => {
              return callback(null, data);
            });
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  UserModel.findOne({ _id: id }).then((err, data) => {
    return done(data, err);
  });
});
