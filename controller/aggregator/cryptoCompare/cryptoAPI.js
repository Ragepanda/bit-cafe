var axios = require("axios");
var db = require("../../../models");
module.exports = {

    getNewArticles: function (req, res) {

        db.articles.findAll({ where: {}, order: [['publishedOn', 'DESC']] })
            .then(sequelizeArticles => {
                var currentTimestamp = new Date() / 1000; // gets the current epoch timestamp

                // Checks to see if DB is empty
                if (sequelizeArticles.length > 0) {

                    //console.log(currentTimestamp - sequelizeArticles[0].createdAt);

                    // Checks to see if 10 minutes have passed since last pull
                    if (currentTimestamp - sequelizeArticles[0].createdAt > 600) {
                        axios.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&feeds=bitcoinmagazine,bitcoinist,bitcoin.com,ccn,coindesk,cointelegraph&limit=100")
                            .then(response => {
                                var articles = [];
                                response.data.Data.forEach(element => {
                                    var entry = {
                                        source: element.source,
                                        cryptoId: element.id,
                                        title: element.title,
                                        body: element.body.substr(0, 254),
                                        articleUrl: element.guid,
                                        imageUrl: element.imageurl,
                                        createdAt: currentTimestamp,
                                        publishedOn: element.published_on
                                    }
                                    articles.push(entry);
                                });
                                // Clear DB before adding new articles
                                db.articles.destroy({
                                    where: {},
                                    truncate: true
                                })
                                    .then(() => {
                                        // Add initial set of articles
                                        db.articles.bulkCreate(articles)
                                            .then(() => {
                                                db.articles.findAll({})
                                                    .then(updatedResponse => {
                                                        res.send(updatedResponse);
                                                    })
                                            })
                                    })


                            });
                    }

                    // Sends out what's in the DB 
                    else {
        
                            res.send(sequelizeArticles);
                              
                    }
                }

                else {

                    // API request to get ccn, bitcoinist, news.bitcoin, coindesk,cointelegraph, 
                    axios.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&feeds=bitcoinmagazine,bitcoinist,bitcoin.com,ccn,coindesk,cointelegraph&limit=100")
                        .then(response => {
                            var articles = [];
                            response.data.Data.forEach(element => {
                                var entry = {
                                    source: element.source,
                                    cryptoId: element.id,
                                    title: element.title,
                                    body: element.body.substr(0, 254),
                                    articleUrl: element.guid,
                                    imageUrl: element.imageurl,
                                    createdAt: currentTimestamp,
                                    publishedOn: element.published_on
                                }
                                articles.push(entry);
                            });
                            //  console.log(articles);
                            db.articles.bulkCreate(articles)
                                .then(() => {
                                    db.articles.findAll({})
                                        .then(updatedResponse => {
                                            //console.log(updatedResponse);
                                            res.send(updatedResponse);
                                        })
                                })
                        })
                }
            })
    },

    getNewsArticlesBySymbol: function (req, res) {
        db.articles.findAll({ where: { category: req.query.symbol }, order: [['publishedOn', 'DESC']] })
            .then(sequelizeArticles => {
                var currentTimestamp = new Date() / 1000;

                if (sequelizeArticles.length > 0) {
                    if (currentTimestamp - sequelizeArticles[0].createdAt > 600) {
                        axios.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&feeds=bitcoinmagazine,bitcoinist,bitcoin.com,ccn,coindesk,cointelegraph&limit=100&categories=" + req.query.symbol)
                            .then(response => {
                                var articles = [];
                                response.data.Data.forEach(element => {
                                    var entry = {
                                        source: element.source,
                                        cryptoId: element.id,
                                        title: element.title,
                                        body: element.body.substr(0, 254),
                                        articleUrl: element.guid,
                                        imageUrl: element.imageurl,
                                        createdAt: currentTimestamp,
                                        publishedOn: element.published_on,
                                        category: req.query.symbol
                                    }
                                    articles.push(entry);
                                });
                                // Clear DB before adding new articles
                                db.articles.destroy({
                                    where: {category: req.query.symbol}
                                })
                                    .then(() => {
                                        // Add initial set of articles
                                        db.articles.bulkCreate(articles)
                                            .then(() => {
                                                db.articles.findAll({where:{category: req.query.symbol}})
                                                    .then(updatedResponse => {
                                                        res.send(updatedResponse);
                                                    })
                                            })
                                    })


                            });
                    }

                    else{
                        // sends what's already there
                        db.articles.findAll({where:{category: req.query.symbol}})
                        .then(sequelizeArticles => {
                            res.send(sequelizeArticles);
                        })       
                    }

                 }

                else {
                    axios.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&feeds=bitcoinmagazine,bitcoinist,bitcoin.com,ccn,coindesk,cointelegraph&limit=100&categories=" + req.query.symbol)
                        .then(response => {
                            var articles = [];
                            response.data.Data.forEach(element => {
                                var entry = {
                                    source: element.source,
                                    cryptoId: element.id,
                                    title: element.title,
                                    body: element.body.substr(0, 254),
                                    articleUrl: element.guid,
                                    imageUrl: element.imageurl,
                                    createdAt: currentTimestamp,
                                    publishedOn: element.published_on,
                                    category: req.query.symbol
                                }
                                articles.push(entry);

                            });
                             // Clear DB before adding new articles                        
                                    // Add initial set of articles
                                    db.articles.bulkCreate(articles)
                                        .then(() => {
                                            db.articles.findAll({where: {category: req.query.symbol}})
                                                .then(updatedResponse => {
                                                    res.send(updatedResponse);
                                                })
                                        })
                                
                            // console.log(response);
                            // res.send(response.data.Data);
                        })
                        .catch(error => {
                            console.log(error);
                            res.send(error);
                        })

                }
            })
    }

}