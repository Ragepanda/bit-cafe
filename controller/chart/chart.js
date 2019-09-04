const axios = require("axios");
var db = require("../../models");

module.exports = {

    dailyHistory: function (req, res) {
        db.dailyChart.findAll({ where: {}, order: [["createdAt", "DESC"]] })
            .then(dailyData => {
                var symbol = req.query.symbol;
                var currentTimestamp = new Date() / 1000;

                if (dailyData.length > 0) {
                    if (currentTimestamp - dailyData[0].createdAt >= 600) {
                        axios.get("https://min-api.cryptocompare.com/data/histoday?fsym=" + symbol + "&tsym=USD&limit=23")
                            .then(response => {
                                var dailyInfo = [];

                                response.data.Data.forEach(element => {
                                    var entry = {
                                        time: element.time,
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
                                db.dailyChart.destroy({ where: {} })
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
                    axios.get("https://min-api.cryptocompare.com/data/histoday?fsym=" + symbol + "&tsym=USD&limit=23")
                        .then(response => {
                            var dailyInfo = [];
                            response.data.Data.forEach(element => {
                                var entry = {
                                    time: element.time,
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
        db.hourlyChart.findAll({ where: {}, order: [["createdAt", "DESC"]] })
            .then(hourlyData => {
                var symbol = req.query.symbol;
                var currentTimestamp = new Date() / 1000;

                if (hourlyData.length > 0) {
                    if (currentTimestamp - hourlyData[0].createdAt >= 600) {
                        axios.get("https://min-api.cryptocompare.com/data/hishour?fsym=" + symbol + "&tsym=USD&limit=23")
                            .then(response => {
                                var hourlyInfo = [];

                                response.data.Data.forEach(element => {
                                    var entry = {
                                        time: element.time,
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
                                db.hourlyChart.destroy({ where: {} })
                                    .then(() => {
                                        db.hourlyChart.bulkCreate(hourlyInfo)
                                            .then(() => {
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
                    axios.get("https://min-api.cryptocompare.com/data/histohour?fsym=" + symbol + "&tsym=USD&limit=23")
                        .then(response => {
                            var hourlyInfo = [];
                            response.data.Data.forEach(element => {
                                var entry = {
                                    time: element.time,
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
        db.minuteChart.findAll({ where: {}, order: [["createdAt", "DESC"]] })
        .then(minuteData => {
            var symbol = req.query.symbol;
            var currentTimestamp = new Date() / 1000;

            if (minuteData.length > 0) {
                if (currentTimestamp - minuteData[0].createdAt >= 60) {
                    axios.get("https://min-api.cryptocompare.com/data/histominute?fsym=" + symbol + "&tsym=USD&limit=23")
                        .then(response => {
                            var minuteInfo = [];

                            response.data.Data.forEach(element => {
                                var entry = {
                                    time: element.time,
                                    close: element.close,
                                    high: element.high,
                                    low: element.low,
                                    open: element.open,
                                    volumefrom: element.volumefrom,
                                    volumeto: element.volumeto,
                                    createdAt: currentTimestamp
                                }
                                minuteInfo.push(entry);
                            });
                            db.minuteChart.destroy({ where: {} })
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
                axios.get("https://min-api.cryptocompare.com/data/histominute?fsym=" + symbol + "&tsym=USD&limit=23")
                    .then(response => {
                        var minuteInfo = [];
                        response.data.Data.forEach(element => {
                            var entry = {
                                time: element.time,
                                close: element.close,
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