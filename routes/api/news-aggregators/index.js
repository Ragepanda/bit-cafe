const router = require("express").Router();

const twitter = require("./twitter");
const cryptoCompare = require("./cryptoCompare")

router.use("/twitter", twitter);
router.use("/feed", cryptoCompare)


module.exports = router;