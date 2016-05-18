
'use strict';

var _ = require('lodash');

module.exports = function (lines) {
  lines[0] = lines[0].toLowerCase();
  var headerline = lines[0];
  var result = [];

  var column_headers = headerline.split(/ [ ]+/);

  var next_index = 1;
  var locations = _.reduce(column_headers, function (result2, title) {
    result2[title] = { 
      start: headerline.indexOf(title),
      end: next_index < column_headers.length ? headerline.indexOf(column_headers[next_index++]) : headerline.indexOf(title) + 1000
    };
    return result2;
  }, {});

  lines.slice(1).forEach(function (line) {
    if (line.trim().length === 0) {
      return;
    }

    var item = {};
    result.push(item);
    _.forEach(locations, function (position, title) {
      //console.log('position', title, 'position = ', position);
      item[title] = line.substring(position.start, position.end).trim();
    });
  });

  return result;
};
