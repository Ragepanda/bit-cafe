var Twitter = require('twitter');
var dotenv = require("dotenv").config();
var db = require("../../../models");
var moment = require('moment');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = {

    coinDesk: function (req, res) {
        var params = { screen_name: 'CoinDesk', count: 15 };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                res.send(tweets);
            }
            else {
                console.log(error);
            }
        });
    },

    cryptoCoinsNews: function (req, res) {
        var params = { screen_name: 'CryptoCoinsNews', count: 15 };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                res.send(tweets)
            }
            else {
                console.log(error);
            }
        });
    },

    coinTelegraph: function (req, res) {
        var params = { screen_name: 'Cointelegraph', count: 15 };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                res.send(tweets)
            }
            else {
                console.log(error);
            }
        });
    },

    cryptoBoomNews: function (req, res) {
        var params = { screen_name: 'CryptoBoomNews', count: 15 };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                res.send(tweets)
            }
            else {
                console.log(error);
            }
        });
    },


    addTweets: function (req, res) {
        db.twitter.findOne()
            .then((currentTweets => {
                var allTweets = [];

                var params =
                    [{ screen_name: 'CryptoBoomNews', count: 15 },
                    { screen_name: 'Cointelegraph', count: 15 },
                    { screen_name: 'CryptoCoinsNews', count: 15 },
                    { screen_name: 'CoinDesk', count: 15 }
                    ];

                currentTime = Math.round(new Date() / 1000);
                if ((currentTweets != null) && (currentTime - currentTweets.insertedAt < 600)) {    
                         // console.log(moment(currentTweets.publishedOn, "ddd MMM DD HH:mm:ss Z YYYY").unix());
                        db.twitter.findAll({order: [['twitterId', 'DESC']]})
                            .then(databasedTweets => {
                                res.send(databasedTweets);
                            })
                }

                else {
                    db.twitter.destroy({where: {}, truncate: true}).then(() =>{
                    // Branched callbacks in order to preserve asynchonous ordering
                    client.get('statuses/user_timeline', params[0], function (error, tweets, response) {
                        if (!error) {
                            tweets.forEach(tweet => allTweets.push(tweet));
                            client.get('statuses/user_timeline', params[1], function (error, tweets, response) {
                                if (!error) {
                                    tweets.forEach(tweet => allTweets.push(tweet));
                                    client.get('statuses/user_timeline', params[2], function (error, tweets, response) {
                                        if (!error) {
                                            tweets.forEach(tweet => allTweets.push(tweet));
                                            client.get('statuses/user_timeline', params[3], function (error, tweets, response) {
                                                // All tweets compiled by this point, copy/paste below and drop into final branch to add more twitter users
                                                tweets.forEach(tweet => allTweets.push(tweet));
                                                // db.twitter.bulkCreate()
                                                compiledTweets = [];

                                                allTweets.forEach(tweet => {

                                                    var url;
                                                    if (tweet.entities.urls.length === 0)
                                                        url = null
                                                    else
                                                        url = tweet.entities.urls[0].url;

                                                    compiledTweets.push({
                                                        user: tweet.user.screen_name,
                                                        twitterId: tweet.id,
                                                        embeddedLink: url,
                                                        text: tweet.text,
                                                        userProfilePicture: tweet.user.profile_image_url,
                                                        publishedOn: moment(tweet.created_at, "ddd MMM DD HH:mm:ss Z YYYY").unix(),
                                                        insertedAt: currentTime
                                                    })
                                                })
                                                db.twitter.bulkCreate(compiledTweets)
                                                    .then(() => {
                                                        db.twitter.findAll({order: [['twitterId', 'DESC']]})
                                                        .then(databasedTweets =>{
                                                            res.send(databasedTweets);
                                                        })
                                                    })

                                            })
                                        }

                                        else 
                                            console.log(error)                                    
                                    })
                                }
                                else 
                                    console.log(error)                           
                            })
                        }
                        else
                            console.log(error);
                    })
                })

                }
            }))
    },

    testAPI: function(req, res){
        client.get('statuses/user_timeline', { screen_name: 'CryptoBoomNews', count: 15 }, function (error, tweets, response) {
            res.send(tweets);
        })
    }


}