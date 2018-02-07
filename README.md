<p align="center">
  <img src="https://i.imgur.com/LDzj7r6.png" width="170" height="181" >
  <br>
  <a href="https://www.npmjs.org/package/smallfetch">
   <img src="https://img.shields.io/npm/v/smallfetch.svg?style=flat" alt="smallfetch">
 </a> 

</p>

# smallfetch

_Smallfetch_ is a pre configured fetch object ready to interact with a Rest API
> Tiny implementation of 200B with no dependencies.
* It sets headers by default to **'application/json'**.
* It _stringify_ object payload and pass it as body content for PUT/POST/PATCH.
* It parses server response to JSON.
* It throws a cachable error when the response is not in the range 200-299.


----------


### Installation
```bash
npm install smallfetch
```
 ```js
 import sf from 'smallfetch';
 ```

### Usage
#### Get - Search
```js
let books = await sf('https://example.com/books');
console.log(books);
 ```
 #### Post - Create
 ```js
sf('https://example.com/books','POST',{name:'Book Name',desc:'Description'})
.then(response=>console.log(response))
.catch(error=>console.log('something is wrong',error));
 ```
#### Put - Update
 ```js
sf('https://example.com/books/1','PUT',{name:'Book Name',desc:'Description'})
.then(response=>console.log(response))
.catch(error=>console.log('something went wrong',error));
```

To avoid throwing errors (for parallel request) pass false  at the end of the request.

```js
Promise.all([
sf('https://example.com/books/1','POST',false),
sf('https://example.com/books/2','POST',false),
sf('https://example.com/books/3','POST',false)
]).then(results=>{
	results.forEach(result=>console.log(result))
});
```
All request will execute without failing. If the request fail an object with the request data will be returned but no exception will be thrown.


