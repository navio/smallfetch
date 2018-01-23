<p align="center">
  <img src="https://imgur.com/a/zEraO" width="259" height="276" alt="smallfetch">
  <br>
  <a href="https://www.npmjs.org/package/smallfetch">
   <img src="https://img.shields.io/npm/v/smallfetch.svg?style=flat" alt="smallfetch">
 </a> 
    <a href="https://david-dm.org/developit/smallfetch"><img src="https://david-dm.org/developit/smallfetch/status.svg" alt="dependencies Status"></a>
</p>

# smallfetch

This module is meant to reduce the configuration to interact with *Fetch*. 
> Minimal implementation of 200B ideal for Browsers or Node.
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
