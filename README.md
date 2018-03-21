# Hackernews Top List

This library just includes one default export. Which when called
will return a promise resolving to a list of articles from hackernews.

### API

```js
getArticles: (count = 30) =>
  Promise<
    Array<HackerNewsArticleShape>
  >
```

### Usage

```js
import getArticles from 'hacker-news-top-list';


getArticles().then(res =>
  console.log(res)
)

```
