
# @rowanmanning/response-redirect-middleware

A small convenience utility to generate [Express](https://expressjs.com/) middleware which redirects a request.

```js
app.get('/', redirect('/login'));
```


## Table of Contents

  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)


## Requirements

This library requires the following to run:

  * [Node.js](https://nodejs.org/) 14+


## Usage

Install with [npm](https://www.npmjs.com/):

```sh
npm install @rowanmanning/response-redirect-middleware
```

Load the library into your code with a `require` call:

```js
const redirect = require('@rowanmanning/response-redirect-middleware');
```

Use it to generate middleware to redirect a view:

```js
const app = express();

app.get('/', redirect('/login'));
```

The following are equivalent:

```js
app.get('/', redirect('/login'));
app.get('/', (request, response) => response.redirect('/login'));
```

```js
app.get('/posts', redirect(301, '/blog'));
app.get('/posts', (request, response) => response.redirect(301, '/blog'));
```

If you need to pass dynamic information into the redirect, don't use this middleware.


## Contributing

[The contributing guide is available here](docs/contributing.md). All contributors must follow [this library's code of conduct](docs/code_of_conduct.md).


## License

Licensed under the [MIT](LICENSE) license.<br/>
Copyright &copy; 2020, Rowan Manning
