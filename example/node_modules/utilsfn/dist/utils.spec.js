'use strict';

var _ = require('./');

describe('fixNumber', function () {

  it('Expect fixNumber return null when receive value undefined', function () {
    expect((0, _.fixNumber)(undefined, 2)).toBe(undefined);
  });
});

describe('rawNumber', function () {

  it('Expect rawNumber return the correct number when receive non english values', function () {
    expect((0, _.rawNumber)('34,56')).toBe(34.56);
    expect((0, _.rawNumber)('30.000.340,56')).toBe(30000340.56);
  });

  it('Expect rawNumber return the same value passed as param when receives an invalid number value', function () {
    expect((0, _.rawNumber)(null)).toBe(null);
    expect((0, _.rawNumber)(undefined)).toBe(undefined);
    expect((0, _.rawNumber)('foo')).toBe('foo');
  });

  it('Expect rawNumber return a number even if is a negative value', function () {
    expect((0, _.rawNumber)('-2.000,20')).toBe(-2000.20);
  });
});