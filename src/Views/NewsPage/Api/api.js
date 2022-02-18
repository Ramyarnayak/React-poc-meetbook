const NEWS_API_KEY = '05677d4958ee4427bf4bce9b88eceb12'
const NEWS_API_URL = 'https://newsapi.org/v2/'


export const anyNews = (searchQuery) => {
    const NEWS_API_ENDPOINT = `${NEWS_API_URL}everything?q=${searchQuery}&apiKey=${NEWS_API_KEY}`;
    var req = new Request(NEWS_API_ENDPOINT);
    return fetch(req)
        .then(function (response) {
            return response.json();
        });
};

export const topNews = (searchQuery) => {
    const NEWS_API_ENDPOINT = `${NEWS_API_URL}top-headlines?country=nz&apiKey=${NEWS_API_KEY}`;
    var req = new Request(NEWS_API_ENDPOINT);
    return fetch(req)
        .then(function (response) {
            return response.json();
        });
};

export const sourceNews = (searchQuery) => {
    const NEWS_API_ENDPOINT = `${NEWS_API_URL}top-headlines?sources=${searchQuery}&apiKey=${NEWS_API_KEY}`;
    var req = new Request(NEWS_API_ENDPOINT);
    return fetch(req)
        .then(function (response) {
            return response.json();
        });
};