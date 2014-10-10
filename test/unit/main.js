'use strict';

var Library = require('../../src/index.js');

describe('Library', function() {

  it('when calling is3Undefined should return false', function() {
    expect(Library.is3Undefined()).to.be.false;
  });


});
