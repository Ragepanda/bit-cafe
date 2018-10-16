const axios = require("axios");

// **TODO** Obscure connection info for rapidAPI
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('coin-tracker-wooski', '16435b4e-7bdb-435b-a75a-3c346a294c82');

module.exports = {

    fullData: function (req, res){
        rapid.call('CoinMarketCap', 'getCryptocurrenciesList', { 
        }).on('success', (payload)=>{
            res.send(payload.slice(0,25));
        }).on('error', (payload)=>{
             console.log(payload)
        });
    },

    partialData: function (req, res){
        res.send({test: "test of partials"});
    }

}

