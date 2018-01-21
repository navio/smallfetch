# smallfetch

This module is meant to reduce the configuration to interact with a REST api.

```js
 import fetcher from 'smallfetch';
 // Get Request
 let books = await fetcher('https://example.com/books');
 console.log(books);
 
 // POST Create
 fetcher('https://example.com/books','POST',{name:'Book Name',desc:'Description'})
 .then(response=>console.log(response))
 .catch(error=>console.log('something is wrong',error));
 
 // PUT Update
 fetcher('https://example.com/books/1','PUT',{name:'Book Name',desc:'Description'})
  .then(response=>console.log(response))
 .catch(error=>console.log('something went wrong',error));
```
