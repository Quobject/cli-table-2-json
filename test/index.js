/*global describe, it, before */
var cliTable2Json = require('../lib/index.js');
var path = require('path');
var should = require('chai').should();
var assert = require('chai').assert;
var debug = require('debug')('cli-table-2-json:test/index.js');


describe('cliTable2Json', function () {

  it('should ', function () {

    //var input = "NAME      ACTIVE   DRIVER      STATE     URL                         SWARM\\nconsul1   -        amazonec2   Running   tcp://54.175.200.212:2376   \\nconsul2   -        amazonec2   Running   tcp://52.23.236.38:2376     \\nconsul3   -        amazonec2   Running   tcp://54.85.111.241:2376    \\n";
    //var lines = input.split('\\n');

    var lines = [ 'NAME      ACTIVE   DRIVER      STATE     URL                         SWARM',
                  'consul1   -        amazonec2   Running   tcp://54.175.200.212:2376   ',
                  'consul2   -        amazonec2   Running   tcp://52.23.236.38:2376     ',
                  'consul3   -        amazonec2   Running   tcp://54.85.111.241:2376    ',
                  ''];

    //console.log(lines);

    var result = cliTable2Json(lines);
    console.log(result);

    //[{
    //  name: 'consul1',
    //  active: '-',
    //  driver: 'amazonec2',
    //  state: 'Running',
    //  url: 'tcp://54.175.200.212:2376',
    //  swarm: ''
    //},
    //  {
    //    name: 'consul2',
    //    active: '-',
    //    driver: 'amazonec2',
    //    state: 'Running',
    //    url: 'tcp://52.23.236.38:2376',
    //    swarm: ''
    //  },
    //  {
    //    name: 'consul3',
    //    active: '-',
    //    driver: 'amazonec2',
    //    state: 'Running',
    //    url: 'tcp://54.85.111.241:2376',
    //    swarm: ''
    //  }]
  });

});


