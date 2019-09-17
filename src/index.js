// ------------COMENZANDO-----------------

const path = require('path');
const fs = require('fs');

// existe la ruta?
export const existRoute = (route) => {
  if (fs.existsSync(route)) {
    return true;
  }
  return false;
};

// Es absoluta ???
export const isAbsoluteOrRelative = (myRoute) => {
  if (path.isAbsolute(myRoute)) {
    return myRoute;
  }
  return path.resolve(myRoute);
};

// hay archivos?
export const isFileOrDirectory = (myRoute) => {
  if (fs.statSync(myRoute).isFile()) {
    return true;
  }
  return false;
};
export const extensions = (myRoute) => {
  if (path.extname(myRoute) === '.md') {
    return path.extname(myRoute);
  }
  return 'no hay extensiones';
};

// guardar archivos en un array
export const saveFiles = (files) => {
  const arrayExtensions = [];
  arrayExtensions.push(files);
  return arrayExtensions;
};
// eslint-disable-next-line no-console

// const readFiles = ('C:\Users\gabhu\Desktop\markdown\LIM010-fe-md-links\README.md') => {
//    fs.readFile('C:\Users\gabhu\Desktop\markdown\LIM010-fe-md-links\README.md', (err, data) => {
//             if (err) throw err;
//             console.log(data);
//         });
//     }

// fs.readFile('C:\Users\gabhu\Desktop\markdown\LIM010-fe-md-links\README.md', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// console.log('hello world');
