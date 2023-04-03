const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const UserModel = require("../../models/user");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(function (username, password, done) {
    UserModel.findOne({
      $or: [{ username: username }, { email: username }],
    }).then((user) => {
      if (!user) {
        return done(null, false, { message: "User Doesn't Exist !" });
      }
      bcrypt.compare(password, user.password, (err, match) => {
        if (err) {
          return done(null, false);
        }
        if (!match) {
          return done(null, false, { message: "Password Doesn't match !" });
        }
        if (match) {
          return done(null, user);
        }
      });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  UserModel.findOne({ _id: id }).then((err, data) => {
    return done(data, err);
  });
});
