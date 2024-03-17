const express = require("express");
const { CustomError } = require("../middlewares/errorHandler.middleware");

const router = express.Router();

router.use("/api/v1", require("./v1"));

router.all("*", (req, res, next) => {
  next(new CustomError(`${req.originalUrl} doesn't exist`, 404));
});

module.exports = router;
