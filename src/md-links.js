// se unen todas las funciones
import { existRoute, verify } from './path-directory';
import { extLinks, validateLink } from './links';

// const path = require('path');

export default (route, options) => new Promise((resolve) => {
  if (existRoute(route) && options.validate === false) {
    resolve(extLinks(verify(route)));
  } else {
    validateLink(extLinks(verify(route)))
      .then(res => resolve(res));
  }
});

// mdLinks(path.join((process.cwd())), '.readme.md', { validate: false })
//   .then(res => console.log(res));
// mdLinks('./readme.md', { validate: true })
//   .then(res => console.log(res));
