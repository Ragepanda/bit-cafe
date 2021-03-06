const axios = require("axios");
var db = require("../../models");

module.exports = {

    dailyHistory: function (req, res) {
        db.dailyChart.findAll({ where: {symbol: req.query.symbol}, order: [["time", "ASC"]] })
            .then(dailyData => {
                var currentTimestamp = new Date() / 1000;
                if (dailyData.length > 0) {
                    if (currentTimestamp - dailyData[0].createdAt >= 600) {
                        axios.get("https://min-api.cryptocompare.com/data/histoday?fsym=" + req.query.symbol + "&tsym=USD&limit=23")
                            .then(response => {
                                var dailyInfo = [];

                                response.data.Data.forEach(element => {
                                    var entry = {
                                        time: element.time,
                                        symbol: req.query.symbol,
                                        close: element.close,
                                        high: element.high,
                                        low: element.low,
                                        open: element.open,
                                        volumefrom: element.volumefrom,
                                        volumeto: element.volumeto,
                                        createdAt: currentTimestamp
                                    }
                                    dailyInfo.push(entry);
                                });
                                db.dailyChart.destroy({ where: {symbol: req.query.symbol} })
                                    .then(() => {
                                        db.dailyChart.bulkCreate(dailyInfo)
                                            .then(() => {
                                                res.send(dailyInfo);
                                            })
                                    })

                            }).catch((error) => {
                                res.send(error);
                            })
                    }
                    else{
                        res.send(dailyData);
                    }
                }

                else {
                    axios.get("https://min-api.cryptocompare.com/data/histoday?fsym=" + req.query.symbol + "&tsym=USD&limit=23")
                        .then(response => {
                            var dailyInfo = [];
                            response.data.Data.forEach(element => {
                                var entry = {
                                    time: element.time,
                                    close: element.close,
                                    symbol: req.query.symbol,
                                    high: element.high,
                                    low: element.low,
                                    open: element.open,
                                    volumefrom: element.volumefrom,
                                    volumeto: element.volumeto,
                                    createdAt: currentTimestamp
                                }
                                dailyInfo.push(entry);
                            });
                            db.dailyChart.bulkCreate(dailyInfo)
                                .then(() => {
                                    res.send(dailyInfo);
                                })
                        }).catch((error) => {
                            res.send(error);
                        })
                }
            })


    },

    hourlyHistory: function (req, res) {
        db.hourlyChart.findAll({ where: {symbol: req.query.symbol}, order: [["time", "ASC"]] })
            .then(hourlyData => {
                var currentTimestamp = new Date() / 1000;
                //console.log(hourlyData);
               // res.send(hourlyData);
                if (hourlyData.length > 0) {
                    if (currentTimestamp - hourlyData[0].createdAt >= 600) {
                        axios.get("https://min-api.cryptocompare.com/data/histohour?fsym=" + req.query.symbol + "&tsym=USD&limit=23")
                            .then(response => {
                                var hourlyInfo = [];
                                //console.log(response.data.Data);
                                response.data.Data.forEach(element => {
                                    var entry = {
                                        time: element.time,
                                        symbol: req.query.symbol,
                                        close: element.close,
                                        high: element.high,
                                        low: element.low,
                                        open: element.open,
                                        volumefrom: element.volumefrom,
                                        volumeto: element.volumeto,
                                        createdAt: currentTimestamp
                                    }
                                    hourlyInfo.push(entry);
                                });
                                db.hourlyChart.destroy({ where: {symbol: req.query.symbol} })
                                    .then(() => {
                                        db.hourlyChart.bulkCreate(hourlyInfo)
                                            .then(() => {
                                               //res.send(hourlyData);
                                                res.send(hourlyInfo);
                                            })
                                    })

                            }).catch((error) => {
                                res.send(error);
                            })
                    }
                    else{
                        res.send(hourlyData);
                    }
                }

                else {
                    axios.get("https://min-api.cryptocompare.com/data/histohour?fsym=" + req.query.symbol + "&tsym=USD&limit=23")
                        .then(response => {
                            var hourlyInfo = [];
                            response.data.Data.forEach(element => {
                                var entry = {
                                    time: element.time,
                                    close: element.close,
                                    symbol: req.query.symbol,
                                    high: element.high,
                                    low: element.low,
                                    open: element.open,
                                    volumefrom: element.volumefrom,
                                    volumeto: element.volumeto,
                                    createdAt: currentTimestamp
                                }
                                hourlyInfo.push(entry);
                            });
                            db.hourlyChart.bulkCreate(hourlyInfo)
                                .then(() => {
                                    res.send(hourlyInfo);
                                })
                        }).catch((error) => {
                            res.send(error);
                        })
                }
            })
    },

    minuteHistory: function (req, res) {
        db.minuteChart.findAll({ where: {symbol: req.query.symbol}, order: [["time", "ASC"]] })
        .then(minuteData => {
            var currentTimestamp = new Date() / 1000;

            if (minuteData.length > 0) {
                if (currentTimestamp - minuteData[0].createdAt >= 60) {
                    axios.get("https://min-api.cryptocompare.com/data/histominute?fsym=" + req.query.symbol + "&tsym=USD&limit=23")
                        .then(response => {
                            var minuteInfo = [];

                            response.data.Data.forEach(element => {
                                var entry = {
                                    time: element.time,
                                    close: element.close,
                                    symbol: req.query.symbol,
                                    high: element.high,
                                    low: element.low,
                                    open: element.open,
                                    volumefrom: element.volumefrom,
                                    volumeto: element.volumeto,
                                    createdAt: currentTimestamp
                                }
                                minuteInfo.push(entry);
                            });
                            db.minuteChart.destroy({ where: {symbol: req.query.symbol} })
                                .then(() => {
                                    db.minuteChart.bulkCreate(minuteInfo)
                                        .then(() => {
                                            res.send(minuteInfo);
                                        })
                                })

                        }).catch((error) => {
                            res.send(error);
                        })
                }
                else{
                    res.send(minuteData);
                }
            }

            else {
                axios.get("https://min-api.cryptocompare.com/data/histominute?fsym=" + req.query.symbol + "&tsym=USD&limit=23")
                    .then(response => {
                        console.log(response.data.Data);
                        var minuteInfo = [];
                        response.data.Data.forEach(element => {
                            var entry = {
                                time: element.time,
                                close: element.close,
                                symbol: req.query.symbol,
                                high: element.high,
                                low: element.low,
                                open: element.open,
                                volumefrom: element.volumefrom,
                                volumeto: element.volumeto,
                                createdAt: currentTimestamp
                            }
                            minuteInfo.push(entry);
                        });
                        db.minuteChart.bulkCreate(minuteInfo)
                            .then(() => {
                                res.send(minuteInfo);
                            })
                    }).catch((error) => {
                        res.send(error);
                    })
            }
        })
    }


}