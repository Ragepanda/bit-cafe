var axios = require("axios");
var db = require("../../../models");
module.exports = {

    getNewsArticlesBySymbol: function(req, res){
        

        axios.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories=ETH")
        .then(response =>{
            res.send(response.data.Data);
        })
        .catch(error =>{
            res.send(error);
        })
    },

    getNewArticles: function (req, res) {

        db.articles.findAll({ where: {}, order: [['publishedOn', 'DESC']] })
            .then(sequelizeArticles => {
                var currentTimestamp = new Date() / 1000; // gets the current epoch timestamp

                // Checks to see if DB is empty
                if (sequelizeArticles.length > 0) {

                    console.log(currentTimestamp - sequelizeArticles[0].createdAt);

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
    }
}