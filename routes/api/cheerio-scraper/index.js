const router = require("express").Router();
const cheerioService = require("../../../controller/cheerio/bodyScrape")

router
.route("/coinTelegraph")
.get(cheerioService.coinTelegraph);

router
.route("/ccn")
.get(cheerioService.ccn);

router
.route("/bitcoinMagazine")
.get(cheerioService.bitcoinMagazine);

router
.route("/coindesk")
.get(cheerioService.coindesk);

router
.route("/bitcoinNews")
.get(cheerioService.bitcoinNews);

router
.route("/bitcoinist")
.get(cheerioService.bitcoinist);

module.exports = router;