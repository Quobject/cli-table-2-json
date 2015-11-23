/**
* Copyright 2015 Matthias Ludwig
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

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


