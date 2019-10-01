import axios from "axios";

export default {
	getArticles: function(){
		return axios.get("localhost:5000/api/news/feed/articles");
	},

  getArticlesBySymbol: function(symbol){
    return axios.get("localhost:5000/api/news/feed/articlesBySymbol", {params: {symbol: symbol}})
  },

	getTweets: function(){
		return axios.get("localhost:5000/api/news/twitter/aggregated");
	},
	//Defunct
	// getCoins: function(){
	// 	return axios.get("/api/tracker/fulldata");
  // },
  
  getMarketCapData: function(){
    return axios.get("localhost:5000/api/tracker/dataByMarketCap");
  },

  getMarketCapDataBySymbol: function(symbol){
    return axios.get("localhost:5000/api/tracker/marketDataBySymbol", {params: {symbol: symbol}})
  },

  getHourlyHistoryBySymbol: function(symbol){
    return axios.get("localhost:5000/api/tracker/hourlyHistoryBySymbol", {params: {symbol: symbol}});
  },

  getDailyHistoryBySymbol: function(symbol){
    return axios.get("localhost:5000/api/tracker/dailyHistoryBySymbol", {params: {symbol: symbol}});
  },

  getMinuteHistoryBySymbol: function(symbol){
    return axios.get("localhost:5000/api/tracker/minuteHistoryBySymbol", {params: {symbol: symbol}});
  },

	// getArticleBody: function(publication, url){
	// 	switch(publication) {

  //           case "ccn":
  //           return axios.get("/api/scrape/ccn", {params: {url: url}});
           
  //           case "bitcoin.com":
  //           return axios.get("/api/scrape/bitcoinNews", {params: {url: url}});

  //           case "cointelegraph":
  //           return axios.get("/api/scrape/coinTelegraph", {params: {url: url}});

  //           case "bitcoinist":
  //           return axios.get("/api/scrape/bitcoinist", {params: {url: url}});

  //           case "bitcoinmagazine":
  //           return axios.get("/api/scrape/bitcoinMagazine", {params: {url: url}});

  //           case "coindesk":
  //           return axios.get("/api/scrape/coindesk", {params: {url: url}});

  //         }
	// }
};
