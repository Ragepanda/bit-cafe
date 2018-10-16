const router = require("express").Router();
// const twitterService = require("../../../controller");
const twitterService = require("../../../controller/aggregator/twitter/twitter");

router
.route("/coinDesk")
.get(twitterService.coinDesk)

router
.route("/ccn")
.get(twitterService.cryptoCoinsNews)

router
.route("/telegraph")
.get(twitterService.coinTelegraph)

router
.route("/aggregated")
.get(twitterService.addTweets)

router
.route("/test")
.get(twitterService.testAPI)


module.exports = router;