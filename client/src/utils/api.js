import axios from 'axios'

const api = {
    searchNYT: function (topic, startDate, endDate) {
        const key = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+
        key + '&q='+topic+'&begin_date='+startDate+'&end_date='+endDate;

        return axios.get(queryURL);
    },
    getArticle: function () {
        return axios.get('/api/saved');
      },

    saveArticle: function (articleObject) {
        return axios.post('/api/saved', articleObject)
      },
    
    deleteArticle: function (id) {
        return axios.delete(`/api/saved/${id}`)
      }
};

export default api;