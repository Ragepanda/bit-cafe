var request = require("request");
var cheerio = require("cheerio");
var axios = require("axios");
module.exports = {

        coinTelegraph: function (req, res){

          axios.get(req.query.url)
          .then(function(response){
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".post-full-text").children("p, h2").each(function(i, element){
              if($(element).is("h2") && $(element).text()!=""){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p") && $(element).text()!=""){
                fullDocument.push({p: $(element).text()})
              }
            });

            res.send({articleBody: fullDocument});
          })
        },

        ccn: function (req, res){

          axios.get(req.query.url)
          .then(function(response){
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".entry-content").children("p, h2").each(function(i, element){
              if($(element).is("h2") && $(element).text()!=""){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p") && $(element).text()!=""){
                fullDocument.push({p: $(element).text()})
              }
            });

            res.send({articleBody: fullDocument});
          })
        },

        bitcoinMagazine: function (req, res){

          axios.get(req.query.url)
          .then(function(response){
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".rich-text").children("p, h2").each(function(i, element){
              if($(element).is("h2") && $(element).text()!=""){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p") && $(element).text()!=""){
                fullDocument.push({p: $(element).text()})
              }
            });

            res.send({articleBody: fullDocument});

          })
        },

        coindesk: function (req, res){

          axios.get(req.query.url)
          .then(function(response){
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".article-content-container").children("p, h2").each(function(i, element){
              if($(element).is("h2") && $(element).text()!=""){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p") && $(element).text()!=""){
                fullDocument.push({p: $(element).text()})
              }
            });

            res.send({articleBody: fullDocument});

          })
        },

        bitcoinNews: function (req, res){
          axios.get(req.query.url)
          .then(function(response){
           
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".td-post-content").children("p, h2").each(function(i, element){
              if($(element).is("h2") && $(element).text()!=""){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p") && $(element).text()!=""){
                fullDocument.push({p: $(element).text()})
              }
            });

            res.send({articleBody: fullDocument});
          })
        },

        bitcoinist: function (req, res){
          axios.get(req.query.url)
          .then(function(response){
            var fullDocument = [];
            var $ = cheerio.load(response.data);
            text = $(".article-content").children("p, h2").each(function(i, element){
              if($(element).is("h2") && $(element).text()!=""){
                fullDocument.push({h2: $(element).text()})
              }
              if($(element).is("p") && $(element).text()!=""){
                fullDocument.push({p: $(element).text()})
              }
            });
            res.send({articleBody: fullDocument});
          })
        },

    
}