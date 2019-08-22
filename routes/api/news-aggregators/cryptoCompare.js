const aggregator = require("../../../controller/aggregator/cryptoCompare/cryptoAPI")
const router = require("express").Router();

// uses extension: /api/news/ccn/add
router
.route("/articles")
.get(aggregator.getNewArticles)

router
.route("/articlesBySymbol")
.get(aggregator.getNewsArticlesBySymbol)



module.exports = router;