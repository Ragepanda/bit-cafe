const axios = require("axios");

// **TODO** Obscure connection info for rapidAPI
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('coin-tracker-wooski', '16435b4e-7bdb-435b-a75a-3c346a294c82');

module.exports = {

    fullData: function (req, res){
        rapid.call('CoinMarketCap', 'getCryptocurrenciesList', { 
        }).on('success', (payload)=>{
            res.send(payload.slice(0,100));
        }).on('error', (payload)=>{
             res.send(payload);
        });
    },

    dataByMarketCap: function(req, res){
        axios.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=25&tsym=USD")
        .then(response =>{
            console.log(response.data.Data);
            res.send(response.data.Data);
        }).catch((error) => {
            res.send(error);
        })
    },

    dailyHistory: function(req, res){
        var symbol = req.query.symbol;
        axios.get("https://min-api.cryptocompare.com/data/histoday?fsym="+symbol+"&tsym=USD&limit=10")
        .then(response =>{
            console.log(response.data.Data);
            res.send(response.data.Data);
        }).catch((error) =>{
            res.send(error);
        } )
    },

    hourlyHistory: function(req, res){
        var symbol = req.query.symbol;
        axios.get("https://min-api.cryptocompare.com/data/histohour?fsym="+symbol+"&tsym=USD&limit=10")
        .then(response =>{
            console.log(response.data.Data);
            res.send(response.data.Data);
        }).catch((error) =>{
            res.send(error);
        } )
    },

    minuteHistory: function(req, res){
        var symbol = req.query.symbol;
        axios.get("https://min-api.cryptocompare.com/data/histominute?fsym="+symbol+"&tsym=GBP&limit=10")
        .then(response =>{
            console.log(response.data.Data);
            res.send(response.data.Data);
        }).catch((error) =>{
            res.send(error);
        } )
    },

    

    partialData: function (req, res){
        res.send({test: "test of partials"});
    }

}

