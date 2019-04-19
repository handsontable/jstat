var vows = require('vows');
var assert = require('assert');
var suite = vows.describe('jStat.commonjs');

suite.addBatch({
  'jStat': {
    'topic': function() {
      return require('./../../dist/jstat.js');
    },
    'should be defined': function(jStat) {
      assert.equal(typeof jStat, 'function');

      // Check some random functions
      assert.equal(typeof jStat.rows, 'function');
      assert.equal(typeof jStat.min, 'function');
      assert.equal(typeof jStat.betafn, 'function');
      assert.equal(typeof jStat.beta.pdf, 'function');
      assert.equal(typeof jStat.add, 'function');
      assert.equal(typeof jStat.zscore, 'function');
    },
  }
});

suite.export(module);
