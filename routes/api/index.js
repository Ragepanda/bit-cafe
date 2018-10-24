const router = require("express").Router();
const testRoutes = require("./test");
const newsRoutes = require("./news-aggregators");
const cryptoRoutes = require("./crypto-tracker");
const scraperRoutes = require("./cheerio-scraper");

// uses url extension: /api/*this page's routes*
router.use("/test", testRoutes);
router.use("/news", newsRoutes);
router.use("/tracker", cryptoRoutes);
router.use("/scrape", scraperRoutes);

module.exports = router;

