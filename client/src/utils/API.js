import axios from "axios";

export default {
	getArticles: function(){
		return axios.get("/api/news/feed/articles")
	},

	getTweets: function(){
		return axios.get("/api/news/twitter/aggregated")
	},
	
	getCoins: function(){
		return axios.get("/api/tracker/fulldata");
	}
};
