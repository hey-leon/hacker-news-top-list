# Hackernews Top Ten

This library just includes one default export. Which when called
will return a promise resolving to the top ten articles on
hackernews.

### API

```js
getArticles: () => Promise<Array<HackerNewsArticleShape>>
```

### Usage

```js
import getArticles from 'hackernews-top-ten';


getArticles().then(res =>
  console.log(res)
)

```
