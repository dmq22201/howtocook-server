const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const { errorHandler } = require("./middlewares/errorHandler.middleware.js");
const { corsWhiteList } = require("./configs");

// App
const app = express();

// Middlewares
app.use(helmet());
app.use(
  cors({
    origin: function (origin, callback) {
      if (corsWhiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(compression());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Databases
require("./db");

// Routes
app.use(require("./routes"));

// Global Error Handling Middleware
app.use(errorHandler);

module.exports = app;
