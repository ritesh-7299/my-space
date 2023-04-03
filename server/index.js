require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const connection = require("./database/connection.js");
// const MemoryStore = require("memorystore")(expressSession);
const cookieSession = require("cookie-session");
const googleStrategy = require("./controllers/passport/passportGoogle");
const localStrategy = require("./controllers/passport/passportLocal");
// const expressSession = require("express-session");
// const MongoStore = require("connect-mongo");

const app = express();
app.set("trust proxy", 1);

// app.use(
//   expressSession({
//     secret: "secretritesh",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.use(
  cookieSession({
    name: "session",
    keys: ["myspace"],
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 100,
  })
);

// app.use(
//   expressSession({
//     cookie: { maxAge: 86400000 },
//     store: new MemoryStore({
//       checkPeriod: 86400000, // prune expired entries every 24h
//     }),
//     resave: false,
//     secret: "myspaceritesh",
//   })
// );

// app.use(
//   expressSession({
//     secret: "secret",
//     saveUninitialized: false, // don't create session until something stored
//     resave: false, //don't save
//     store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
//   })
// );

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 8080;
connection(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo connection successfull!");
    app.listen(PORT, () => {
      console.log(`server is running on port:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection was not set...", error);
  });
