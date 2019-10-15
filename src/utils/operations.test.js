import {
  mod, mul, sub, sum,
} from './operations';

describe('Calculator operations tests', () => {
  test('Addition test', () => {
    expect(sum(5, 5)).toBe(10);
  });
  test('Substraciont test', () => {
    expect(sub(10, 5)).toBe(5);
  });
  test('Multiplication test', () => {
    expect(mul(10, 5)).toBe(50);
  });
  test('Module test', () => {
    expect(mod(12, 5)).toBe(2);
  });
});

describe('Calculator operations tests with invalid values', () => {
  test('Addition test', () => {
    expect(sum(null, '99')).toBe(null);
  });
  test('Substraciont test', () => {
    expect(sub('kdkd', 5)).toBe(null);
  });
  test('Multiplication test', () => {
    expect(mul(null, null)).toBe(null);
  });
  test('Module test', () => {
    expect(mod(null, 'ooo')).toBe(null);
  });
});
