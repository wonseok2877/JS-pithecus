<link href="mdstyle.css" rel="stylesheet"></link>

# Front-End
## how to receive data through url?
-   [FCC](https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/)
-   [stackoverflow](https://stackoverflow.com/questions/247483/http-get-request-in-javascript)

JavaScript has great modules and methods to make HTTP requests that can be used to send or receive data from a server side resource. In this article, we are going to look at a few popular ways to make HTTP requests in JavaScript.

### 1. Fetch() method
-   [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

#### what is it?
The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

Fetch provides a generic definition of Request and Response objects. This will allow them to be used wherever they are needed in the future, whether it’s for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions).

#### Promise
 fetch is one of the best and my favorite way to make an HTTP request. It returns a “Promise” which is one of the great features of ES6. 

 Promises allow us to handle the asynchronous request in a smarter way. promise can execute multiple requests.

#### usage
The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not.

```js
const Url = 'https://blahblah'
const data={
    name: "lalala"
    id:10
}
const otherParam={
    headers:{
        "content-type":"application/json; charset=UTF-8"
    }
    body:data,
    method:"POST"
}

fetch(Url, otherParam)
.then(data=>{return data.json()})
.then(res=>{console.log(res)})
.catch(error=>console.log(error))
```

or you can send data using fetch method, with ES2017 async/await support
```js
(async () => {
  const rawResponse = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const content = await rawResponse.json();

  console.log(content);
})();
```

### 2. Ajax
Ajax is the traditional way to make an asynchronous HTTP request. Data can be sent using the HTTP POST method and received using the HTTP GET method. Let’s take a look and make a GET request. I’ll be using JSONPlaceholder, a free online REST API for developers that returns random data in JSON format.

To make an HTTP call in Ajax, you need to initialize a new XMLHttpRequest() method, specify the URL endpoint and HTTP method (in this case GET). Finally, we use the open() method to tie the HTTP method and URL endpoint together and call the send() method to fire off the request.

We log the HTTP response to the console by using the XMLHTTPRequest.onreadystatechange property which contains the event handler to be called when the readystatechanged event is fired.

### 3. jQuery methods
jQuery has many methods to easily handle HTTP requests. In order to use these methods, you’ll need to include the jQuery library in your project.

## how to send data from front to back-end?
### form action
[javascripttutorial](https://www.javascripttutorial.net/javascript-dom/javascript-form/)
```html
<!-- html -->
<form action="/signup" method="post" id="signup"> 
</form>
```
```pug
//- pug
form(action=routes.join, method="post")
```
The `form` element has two important attributes: action and method.

> `action` is a URL that will process the form submission.

method is the HTTP method to submit the form with. Typically, it is the `post` or `get` method. The `post` method sends data to the server as the request body while the get method appends the form data to the action URL with a `?` operator.

```js
// create form element in javascript 

function post(path, params, method='post') {

  // The rest of this code assumes you are not using a library.
  // It can be made less wordy if you use one.
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}
```