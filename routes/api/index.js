const router = require("express").Router();
const testRoutes = require("./test");
const newsRoutes = require("./news-aggregators");
const cryptoRoutes = require("./crypto-tracker");

// uses url extension: /api/*this page's routes*
router.use("/test", testRoutes);
router.use("/news", newsRoutes);
router.use("/tracker", cryptoRoutes);

module.exports = router;

