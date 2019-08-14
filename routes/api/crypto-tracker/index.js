const router = require("express").Router();
const cryptoService = require("../../../controller/crypto-tracker/crypto");

router
.route("/dataByMarketCap")
.get(cryptoService.dataByMarketCap);

router
.route("/marketDataBySymbol")
.get(cryptoService.fullDataBySymbol);

router
.route("/partialData")
.get(cryptoService.partialData);

router
.route("/dailyHistoryBySymbol")
.get(cryptoService.dailyHistory);

router
.route("/hourlyHistoryBySymbol")
.get(cryptoService.hourlyHistory);

router
.route("/minuteHistoryBySymbol")
.get(cryptoService.minuteHistory);

module.exports = router;