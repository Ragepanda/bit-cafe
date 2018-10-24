var request = require("request");
var cheerio = require("cheerio");
var axios = require("axios");
module.exports = {

        coinTelegraph: function (req, res){
          axios.get("https://cointelegraph.com/news/swiss-financial-association-publishes-anti-money-laundering-standards-for-digital-assets")
          .then(function(response){
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".post-full-text").children("p, h2").each(function(i, element){
              if($(element).is("h2")){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p")){
                fullDocument.push({p: $(element).text()})
              }
            });

            res.send({articleBody: fullDocument});
          })
        },

        ccn: function (req, res){
          axios.get("https://www.ccn.com/tesla-ceo-elon-musk-jokes-about-bitcoin-on-twitter-with-23-million-followers/")
          .then(function(response){
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".entry-content").children("p, h2").each(function(i, element){
              if($(element).is("h2")){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p")){
                fullDocument.push({p: $(element).text()})
              }
            });

            res.send({articleBody: fullDocument});
          })
        },

        bitcoinMagazine: function (req, res){
          axios.get("https://bitcoinmagazine.com/articles/coinbase-just-added-its-first-stablecoin/#1540314888")
          .then(function(response){
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".rich-text").children("p, h2").each(function(i, element){
              if($(element).is("h2")){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p")){
                fullDocument.push({p: $(element).text()})
              }
            });

            res.send({articleBody: fullDocument});

          })
        },

        coindesk: function (req, res){
          axios.get("https://www.coindesk.com/coinbase-adds-its-first-stablecoin-tied-to-the-us-dollar/")
          .then(function(response){
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".article-content-container").children("p, h2").each(function(i, element){
              if($(element).is("h2")){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p")){
                fullDocument.push({p: $(element).text()})
              }
            });

            res.send({articleBody: fullDocument});

          })
        },

        bitcoinNews: function (req, res){
          axios.get("https://news.bitcoin.com/cointext-launches-sms-bitcoin-cash-wallet-in-four-new-markets/")
          .then(function(response){
           
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".td-post-content").children("p, h2").each(function(i, element){
              if($(element).is("h2")){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p")){
                fullDocument.push({p: $(element).text()})
              }
            });

            res.send({articleBody: fullDocument});
          })
        },

        bitcoinist: function (req, res){
          axios.get("https://bitcoinist.com/square-subzero-bitcoin-cold-storage/")
          .then(function(response){
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".article-content").children("p, h2").each(function(i, element){
              if($(element).is("h2")){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p")){
                fullDocument.push({p: $(element).text()})
              }
            });
            console.log(fullDocument);
            res.send({articleBody: fullDocument});
          })
        },

    
}