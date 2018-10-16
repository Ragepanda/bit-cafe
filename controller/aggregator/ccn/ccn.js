var axios = require("axios");
var db = require("../../../models");
module.exports = {

    getNewArticles: function (req, res) {
        axios.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&feeds=ccn&limit=50")
            .then(response => {
                var articles = [];
                response.data.Data.forEach(element => {
                    articles.push(element);
                });
                res.send(articles);
            })
    }
}