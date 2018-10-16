const ccnService = require("../../../controller/aggregator/cryptoCompare/cryptoAPI")
const router = require("express").Router();

// uses extension: /api/news/ccn/add
router
.route("/articles")
.get(ccnService.getNewArticles)





module.exports = router;