import { fixNumber, rawNumber } from './';

describe('fixNumber', () => {

  it('Expect fixNumber return null when receive value undefined', () => {
    expect(fixNumber(undefined, 2)).toBe(undefined);
  });

});

describe('rawNumber', () => {

  it('Expect rawNumber return the correct number when receive non english values', () => {
    expect(rawNumber('34,56')).toBe(34.56);
    expect(rawNumber('30.000.340,56')).toBe(30000340.56);
  });

  it('Expect rawNumber return the same value passed as param when receives an invalid number value', () => {
    expect(rawNumber(null)).toBe(null);
    expect(rawNumber(undefined)).toBe(undefined);
    expect(rawNumber('foo')).toBe('foo');
  });

  it('Expect rawNumber return a number even if is a negative value', () => {
    expect(rawNumber('-2.000,20')).toBe(-2000.20);
  });

});
