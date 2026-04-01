import { Calculator, isValidNumber, formatNumber, round } from '../src';

describe('Calculator', () => {
  const calc = new Calculator();

  describe('Basic operations', () => {
    test('add should sum two numbers', () => {
      expect(calc.add(5, 3)).toBe(8);
      expect(calc.add(-5, 3)).toBe(-2);
      expect(calc.add(0, 0)).toBe(0);
    });

    test('subtract should find difference', () => {
      expect(calc.subtract(5, 3)).toBe(2);
      expect(calc.subtract(3, 5)).toBe(-2);
      expect(calc.subtract(0, 0)).toBe(0);
    });

    test('multiply should find product', () => {
      expect(calc.multiply(5, 3)).toBe(15);
      expect(calc.multiply(-5, 3)).toBe(-15);
      expect(calc.multiply(0, 5)).toBe(0);
    });

    test('divide should find quotient', () => {
      expect(calc.divide(6, 2)).toBe(3);
      expect(calc.divide(5, 2)).toBe(2.5);
      expect(calc.divide(0, 5)).toBe(0);
    });

    // TODO: Issue #1 test - Division by zero should throw error
    test('divide by zero should throw error', () => {
      expect(() => calc.divide(5, 0)).toThrow();
    });

    test('percentage should calculate correctly', () => {
      expect(calc.percentage(100, 25)).toBe(25);
      expect(calc.percentage(50, 20)).toBe(10);
    });

    test('sqrt should calculate square root', () => {
      expect(calc.sqrt(16)).toBe(4);
      expect(calc.sqrt(25)).toBe(5);
      expect(calc.sqrt(0)).toBe(0);
    });

    test('sqrt of negative should throw error', () => {
      expect(() => calc.sqrt(-1)).toThrow('Cannot calculate square root of negative number');
    });
  });

  // Issue #2 tests - Power function
  describe('power', () => {
    test('should calculate base raised to positive exponent', () => {
      expect(calc.power(2, 3)).toBe(8);
      expect(calc.power(3, 2)).toBe(9);
      expect(calc.power(5, 3)).toBe(125);
    });

    test('should return 1 for any base raised to power 0', () => {
      expect(calc.power(2, 0)).toBe(1);
      expect(calc.power(5, 0)).toBe(1);
      expect(calc.power(0, 0)).toBe(1);
      expect(calc.power(-5, 0)).toBe(1);
    });

    test('should return base for any base raised to power 1', () => {
      expect(calc.power(2, 1)).toBe(2);
      expect(calc.power(5, 1)).toBe(5);
      expect(calc.power(-3, 1)).toBe(-3);
      expect(calc.power(0, 1)).toBe(0);
    });

    test('should handle negative base with even exponent', () => {
      expect(calc.power(-2, 2)).toBe(4);
      expect(calc.power(-3, 4)).toBe(81);
    });

    test('should handle negative base with odd exponent', () => {
      expect(calc.power(-2, 3)).toBe(-8);
      expect(calc.power(-3, 3)).toBe(-27);
    });

    test('should handle zero base with positive exponent', () => {
      expect(calc.power(0, 5)).toBe(0);
      expect(calc.power(0, 10)).toBe(0);
    });

    test('should throw descriptive error for negative exponent', () => {
      expect(() => calc.power(2, -1)).toThrow('Negative exponents are not supported');
      expect(() => calc.power(5, -3)).toThrow('Negative exponents are not supported');
      expect(() => calc.power(0, -1)).toThrow('Negative exponents are not supported');
    });

    test('should throw error for any negative exponent value', () => {
      for (const exponent of [-1, -2, -10, -100]) {
        expect(() => calc.power(2, exponent)).toThrow();
      }
    });
  });
});

describe('Utils', () => {
  test('isValidNumber should validate numbers', () => {
    expect(isValidNumber(5)).toBe(true);
    expect(isValidNumber(0)).toBe(true);
    expect(isValidNumber(-5)).toBe(true);
    expect(isValidNumber(NaN)).toBe(false);
    expect(isValidNumber(Infinity)).toBe(false);
    expect(isValidNumber('5')).toBe(false);
    expect(isValidNumber(null)).toBe(false);
  });

  test('formatNumber should format decimals', () => {
    expect(formatNumber(5.123, 2)).toBe('5.12');
    expect(formatNumber(5, 2)).toBe('5.00');
    expect(formatNumber(5.999, 2)).toBe('6.00');
  });

  test('round should round to precision', () => {
    expect(round(5.555, 2)).toBe(5.56);
    expect(round(5.555, 0)).toBe(6);
    expect(round(5.4, 0)).toBe(5);
  });
});