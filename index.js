const API = 'https://hacker-news.firebaseio.com/v0';

const TOP_ARTICLES_ENDPOINT = `${API}/topstories`;
const ITEM_ENDPOINT = `${API}/item`;

module.exports = (count = 30) =>
  fetch(`${TOP_ARTICLES_ENDPOINT}.json`)
    .then(res => res.json())
    .then(json =>
      Promise.all(json.slice(0, count).map(articleId =>
        fetch(`${ITEM_ENDPOINT}/${articleId}.json`)
      )))
    .then(results =>
      Promise.all(results.map(res =>
        res.json()
      )))
