import axios from "axios";

export default {
	getArticles: function(){
		return axios.get("/api/news/feed/articles");
	},

	getTweets: function(){
		return axios.get("/api/news/twitter/aggregated");
	},
	
	getCoins: function(){
		return axios.get("/api/tracker/fulldata");
  },
  
  getMarketCapData: function(){
    return axios.get("/api/tracker/dataByMarketCap");
  },

	getArticleBody: function(publication, url){
		switch(publication) {

            case "ccn":
            return axios.get("/api/scrape/ccn", {params: {url: url}})
           
            case "bitcoin.com":
            return axios.get("/api/scrape/bitcoinNews", {params: {url: url}})

            case "cointelegraph":
            return axios.get("/api/scrape/coinTelegraph", {params: {url: url}});

            case "bitcoinist":
            return axios.get("/api/scrape/bitcoinist", {params: {url: url}});

            case "bitcoinmagazine":
            return axios.get("/api/scrape/bitcoinMagazine", {params: {url: url}});

            case "coindesk":
            return axios.get("/api/scrape/coindesk", {params: {url: url}});

          }
	}
};
