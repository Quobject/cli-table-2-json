import * as _ from 'lodash';


export function cliTable2Json(lines: string[]): any[] {

  lines[0] = lines[0].toLowerCase();
  let headerline = lines[0];
  let result: any[] = [];

  let column_headers = headerline.split(/ [ ]+/);

  let next_index = 1;
  const locations = column_headers.reduce((result2, title) => {
    result2[title] = {
      end: next_index < column_headers.length ?
        headerline.indexOf(column_headers[next_index++])
        : headerline.indexOf(title) + 1000,
      start: headerline.indexOf(title),
    };
    return result2;
  }, {});

  lines.slice(1).forEach(function (line) {
    if (line.trim().length === 0) {
      return;
    }

    const item = {};
    result.push(item);
    _.forEach(locations, function (position, title) {
      // console.log('position', title, 'position = ', position);
      item[title] = line.substring(position.start, position.end).trim();
    });
  });

  return result;
}
