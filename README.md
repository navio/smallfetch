# smallfetch

This module is meant to reduce the configuration to interact with *Fetch*. 

* It sets headers by default to 'application/json'.
* It receives a JS object stringify it and send it in the body.
* It parses server response to JSON.
* It throws a cachable error when the response is not in the range 200-299.



Get - Query
```js
 import fetcher from 'smallfetch';
 // Get Request
 let books = await fetcher('https://example.com/books');
 console.log(books);
 ```
 Post - Create
 ```js
 // POST Create
 fetcher('https://example.com/books','POST',{name:'Book Name',desc:'Description'})
 .then(response=>console.log(response))
 .catch(error=>console.log('something is wrong',error));
 ```
 Put - Update
 ```js
 fetcher('https://example.com/books/1','PUT',{name:'Book Name',desc:'Description'})
  .then(response=>console.log(response))
 .catch(error=>console.log('something went wrong',error));
```
