const router = require("express").Router();
const cryptoService = require("../../../controller/crypto-tracker/crypto");
const chartService = require("../../../controller/chart/chart")
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
.get(chartService.dailyHistory);

router
.route("/hourlyHistoryBySymbol")
.get(chartService.hourlyHistory);

router
.route("/minuteHistoryBySymbol")
.get(chartService.minuteHistory);

router
.route("/getCoinDescription")
.get(cryptoService.coinDescription)


module.exports = router;