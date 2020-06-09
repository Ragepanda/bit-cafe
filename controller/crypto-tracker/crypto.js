const axios = require("axios");
var db = require("../../models");
var request = require("request");
var cheerio = require("cheerio");
// **TODO** Obscure connection info for rapidAPI
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('coin-tracker-wooski', '16435b4e-7bdb-435b-a75a-3c346a294c82');

module.exports = {

    dataByMarketCap: function (req, res) {
        db.market.findAll({ where: {}, order: [["marketCap", "DESC"]] })
            .then(marketData => {
                var currentTimestamp = new Date() / 1000;
                var entry = [];
                if (marketData.length > 0) {
                    if (currentTimestamp - marketData[0].createdAt > 60) {
                        axios.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=25&tsym=USD")
                            .then(response => {
                                var marketInfo = [];
                                response.data.Data.forEach(element => {
                                    var entry = {
                                        fullName: element.CoinInfo.FullName,
                                        symbol: element.CoinInfo.Internal,
                                        imageUrl: element.CoinInfo.ImageUrl,
                                        marketCap: element.RAW.USD.MKTCAP,
                                        marketCapString: element.DISPLAY.USD.MKTCAP,
                                        price: element.DISPLAY.USD.PRICE,
                                        rawPrice: element.RAW.USD.PRICE,
                                        volume24H: element.DISPLAY.USD.VOLUME24HOURTO,
                                        supply: element.DISPLAY.USD.SUPPLY,
                                        changePct24: element.RAW.USD.CHANGEPCT24HOUR,
                                        createdAt: currentTimestamp
                                    }
                                    marketInfo.push(entry);

                                    // ORGANIZE INTO DB STORAGE
                                })
                                db.market.destroy({ where: {} })
                                    .then(() => {
                                        db.market.bulkCreate(marketInfo)
                                            .then(() => {
                                                res.send(marketInfo);
                                            })
                                    })
                            }).catch((error) => {
                                res.send(error);
                            })
                    }
                    else {
                        //Database has goodies
                        res.send(marketData);
                    }
                }

                else {
                    //empty db
                    axios.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=25&tsym=USD")
                        .then(response => {
                            var marketInfo = [];
                            response.data.Data.forEach(element => {
                                var entry = {
                                    fullName: element.CoinInfo.FullName,
                                    symbol: element.CoinInfo.Internal,
                                    imageUrl: element.CoinInfo.ImageUrl,
                                    marketCap: element.RAW.USD.MKTCAP,
                                    marketCapString: element.DISPLAY.USD.MKTCAP,
                                    price: element.DISPLAY.USD.PRICE,
                                    rawPrice: element.RAW.USD.PRICE,
                                    volume24H: element.DISPLAY.USD.VOLUME24HOURTO,
                                    supply: element.DISPLAY.USD.SUPPLY,
                                    changePct24: element.RAW.USD.CHANGEPCT24HOUR,
                                    createdAt: currentTimestamp
                                }
                                marketInfo.push(entry);

                                // ORGANIZE INTO DB STORAGE
                            })
                            db.market.bulkCreate(marketInfo)
                                .then(() => {
                                    res.send(marketInfo);
                                })

                        }).catch((error) => {
                            res.send(error);
                        })

                }
            })

    },

    fullDataBySymbol: function (req, res) {
        var symbol = req.query.symbol;
        axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + symbol + "&tsyms=USD").
            then(response => {
                res.send(response.data.Data);
            }).catch((error) => {
                res.send(error);
            })
    },

    dailyHistory: function (req, res) {
        var symbol = req.query.symbol;
        axios.get("https://min-api.cryptocompare.com/data/histoday?fsym=" + symbol + "&tsym=USD&limit=23")
            .then(response => {
                res.send(response.data.Data);
            }).catch((error) => {
                res.send(error);
            })
    },

    hourlyHistory: function (req, res) {
        var symbol = req.query.symbol;
        axios.get("https://min-api.cryptocompare.com/data/histohour?fsym=" + symbol + "&tsym=USD&limit=23")
            .then(response => {
                res.send(response.data.Data);
            }).catch((error) => {
                res.send(error);
            })
    },

    minuteHistory: function (req, res) {
        var symbol = req.query.symbol;
        axios.get("https://min-api.cryptocompare.com/data/histominute?fsym=" + symbol + "&tsym=GBP&limit=23")
            .then(response => {
                res.send(response.data.Data);
            }).catch((error) => {
                res.send(error);
            })
    },


    partialData: function (req, res) {
        res.send({ test: "test of partials" });
    },

    coinDescription: function(req, res){
        axios.get("https://www.cryptocompare.com/coins/"+req.query.coin.toLowerCase()+"/overview")
            .then((response)=>{
                const $ = cheerio.load(response.data);
                console.log($(".coin-description").html());
                var fullText = [];
                
                res.send({description: $(".coin-description").find("p").text()});
            })
        
    }

}

