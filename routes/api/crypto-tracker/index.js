const router = require("express").Router();
const cryptoService = require("../../../controller/crypto-tracker/crypto")

router
.route("/fullData")
.get(cryptoService.fullData);

router
.route("/dataByMarketCap")
.get(cryptoService.dataByMarketCap);

router
.route("/partialData")
.get(cryptoService.partialData);


module.exports = router;