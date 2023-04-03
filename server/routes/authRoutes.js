const router = require("express").Router();
const passport = require("passport");
const UserModel = require("../models/user.js");
const bcrypt = require("bcrypt");

router.post("/register", function (req, res) {
  const { email, username, password, confirm_password } = req.body;

  // check the existing user
  const existUsername = new Promise((resolve, reject) => {
    UserModel.findOne({ username: username }).then((user) => {
      if (user) {
        reject(new Error({ error: "Please use unique Username" }));
      } else {
        resolve();
      }
    });
  });

  // check for existing email
  const existEmail = new Promise((resolve, reject) => {
    UserModel.findOne({ email: email }).then((user) => {
      if (user) {
        reject(new Error({ error: "Please use unique Email" }));
      } else {
        resolve();
      }
    });
  });

  if (!email || !username || !password || !confirm_password) {
    return res.status(403).json({
      error: true,
      message: "All fields are required!",
    });
  } else if (password !== confirm_password) {
    return res.status(403).send({ error: "Passwords aren't matching!" });
  } else {
    Promise.all([existUsername, existEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              const user = new UserModel({
                username: username,
                email: email,
                password: hashedPassword,
                googleId: null,
                provider: "email",
              });

              //save the model
              user
                .save()
                .then((result) =>
                  res.status(201).send({ msg: "User registration successfull" })
                )
                .catch((error) => res.status(500).send({ error }));
            })
            .catch((error) => {
              return res
                .status(500)
                .send({ error: "Unable to hash the password" });
            });
        }
      })
      .catch((error) => {
        return res
          .status(403)
          .send({ error: "Username or Email is already exists" });
      });
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/auth/local/login/success",
    failureRedirect: "/auth/local/login/failed",
  })
);

router.get("/local/login/failed", (req, res) => {
  res.status(403).json({
    error: true,
    message: "Invalid Credentials",
  });
});

router.get("/local/login/success", (req, res) => {
  res.status(201).json({
    error: false,
    message: "Login successfull",
    user: req.body.username,
  });
});

const fetchNASAData = async () => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};

router.get("/get-image", async (req, res) => {
  const data = await fetchNASAData();
  if (!data) {
    res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
  res.status(201).json({
    error: false,
    message: "successfull",
    data: data,
  });
});

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(201).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user.username,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(403).json({
    error: true,
    message: "Login failure",
  });
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.status(201).json({
    error: false,
    message: "Logout successfull",
  });
});

module.exports = router;
