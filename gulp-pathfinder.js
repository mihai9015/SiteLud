'use strict';

const through = require('through2'); // eslint-disable-line

module.exports = function (p) {
  return through.obj((file, encoding, callback) => {
    file.contents.toString().split('\n')
    // exclude commented lines
      .filter(line => !line.startsWith('//'))
    // identify file paths, remove the other lines and create a flat array
      .map(line => line.match(/[\"\'][^\"\n=]+\/[^\"\n=]+\.[^\"\n=]+[\"\']/g))  // eslint-disable-line
      .filter(line => !!line)
      .reduce((paths, line) => [...paths, ...line], [])
    // remove quotes
      .map(path => path.replace(/[\"\']/g, '')) // eslint-disable-line
    // keep only paths from the 'resource' folder
    // .filter(path =>
    // path.startsWith('resource') || path.startsWith('app') || path.startsWith('config') )
    // remove duplicates
      .reduce((uniques, path) => (uniques.includes(path) ? uniques : uniques.concat([path])), [])
      .forEach(path => p.push(path));
    callback(null, file);
  });
};
