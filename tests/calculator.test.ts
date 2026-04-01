import { Calculator, isValidNumber, formatNumber, round } from '../src';

describe('Calculator', () => {
  const calc = new Calculator();

  // Issue #5 - Comprehensive tests for add
  describe('add', () => {
    test('should sum two positive numbers', () => {
      expect(calc.add(5, 3)).toBe(8);
      expect(calc.add(100, 200)).toBe(300);
    });

    test('should sum negative numbers', () => {
      expect(calc.add(-5, 3)).toBe(-2);
      expect(calc.add(5, -3)).toBe(2);
      expect(calc.add(-5, -3)).toBe(-8);
    });

    test('should sum with zero', () => {
      expect(calc.add(0, 0)).toBe(0);
      expect(calc.add(5, 0)).toBe(5);
      expect(calc.add(0, 5)).toBe(5);
    });

    test('should sum decimal numbers', () => {
      expect(calc.add(0.5, 0.3)).toBeCloseTo(0.8);
      expect(calc.add(1.5, 2.5)).toBe(4);
      expect(calc.add(-0.5, 0.5)).toBe(0);
    });

    test('should sum large numbers', () => {
      expect(calc.add(1000000, 500000)).toBe(1500000);
      expect(calc.add(999999, 1)).toBe(1000000);
    });
  });

  // Issue #5 - Comprehensive tests for subtract
  describe('subtract', () => {
    test('should subtract positive numbers', () => {
      expect(calc.subtract(5, 3)).toBe(2);
      expect(calc.subtract(3, 5)).toBe(-2);
      expect(calc.subtract(100, 50)).toBe(50);
    });

    test('should subtract negative numbers', () => {
      expect(calc.subtract(-5, 3)).toBe(-8);
      expect(calc.subtract(5, -3)).toBe(8);
      expect(calc.subtract(-5, -3)).toBe(-2);
    });

    test('should subtract with zero', () => {
      expect(calc.subtract(0, 0)).toBe(0);
      expect(calc.subtract(5, 0)).toBe(5);
      expect(calc.subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(calc.subtract(0.8, 0.3)).toBeCloseTo(0.5);
      expect(calc.subtract(2.5, 1.5)).toBe(1);
    });

    test('should subtract large numbers', () => {
      expect(calc.subtract(1000000, 500000)).toBe(500000);
      expect(calc.subtract(1000000, 1000000)).toBe(0);
    });
  });

  // Issue #5 - Comprehensive tests for multiply
  describe('multiply', () => {
    test('should multiply positive numbers', () => {
      expect(calc.multiply(5, 3)).toBe(15);
      expect(calc.multiply(10, 10)).toBe(100);
    });

    test('should multiply negative numbers', () => {
      expect(calc.multiply(-5, 3)).toBe(-15);
      expect(calc.multiply(5, -3)).toBe(-15);
      expect(calc.multiply(-5, -3)).toBe(15);
    });

    test('should multiply with zero', () => {
      expect(calc.multiply(0, 5)).toBe(0);
      expect(calc.multiply(5, 0)).toBe(0);
      expect(calc.multiply(0, 0)).toBe(0);
    });

    test('should multiply decimal numbers', () => {
      expect(calc.multiply(0.5, 2)).toBe(1);
      expect(calc.multiply(2.5, 2)).toBe(5);
      expect(calc.multiply(0.1, 0.1)).toBeCloseTo(0.01);
    });

    test('should multiply large numbers', () => {
      expect(calc.multiply(1000, 1000)).toBe(1000000);
      expect(calc.multiply(100, 10000)).toBe(1000000);
    });

    test('should multiply by one', () => {
      expect(calc.multiply(5, 1)).toBe(5);
      expect(calc.multiply(-5, 1)).toBe(-5);
      expect(calc.multiply(0, 1)).toBe(0);
    });
  });

  // Issue #5 - Comprehensive tests for divide
  describe('divide', () => {
    test('should divide positive numbers', () => {
      expect(calc.divide(6, 2)).toBe(3);
      expect(calc.divide(100, 10)).toBe(10);
      expect(calc.divide(50, 5)).toBe(10);
    });

    test('should divide with remainder', () => {
      expect(calc.divide(5, 2)).toBe(2.5);
      expect(calc.divide(7, 3)).toBeCloseTo(2.333);
      expect(calc.divide(10, 3)).toBeCloseTo(3.333);
    });

    test('should divide negative numbers', () => {
      expect(calc.divide(-6, 2)).toBe(-3);
      expect(calc.divide(6, -2)).toBe(-3);
      expect(calc.divide(-6, -2)).toBe(3);
    });

    test('should divide zero by number', () => {
      expect(calc.divide(0, 5)).toBe(0);
      expect(calc.divide(0, 100)).toBe(0);
    });

    test('should divide decimal numbers', () => {
      expect(calc.divide(1, 2)).toBe(0.5);
      expect(calc.divide(0.5, 0.25)).toBe(2);
      expect(calc.divide(2.5, 0.5)).toBe(5);
    });

    test('should divide by one', () => {
      expect(calc.divide(5, 1)).toBe(5);
      expect(calc.divide(-5, 1)).toBe(-5);
      expect(calc.divide(0, 1)).toBe(0);
    });

    test('divide by zero should throw error', () => {
      expect(() => calc.divide(5, 0)).toThrow('Division by zero is not allowed');
      expect(() => calc.divide(0, 0)).toThrow();
      expect(() => calc.divide(-5, 0)).toThrow();
    });
  });

  // Issue #5 - Comprehensive percentage tests
  describe('percentage', () => {
    test('should calculate basic percentages', () => {
      expect(calc.percentage(100, 25)).toBe(25);
      expect(calc.percentage(50, 20)).toBe(10);
      expect(calc.percentage(200, 50)).toBe(100);
    });

    test('should handle 0% percentage', () => {
      expect(calc.percentage(100, 0)).toBe(0);
      expect(calc.percentage(500, 0)).toBe(0);
      // Note: -100 * 0 = -0 in JavaScript, which is semantically 0
      expect(Object.is(calc.percentage(-100, 0), 0) || Object.is(calc.percentage(-100, 0), -0)).toBe(true);
    });

    test('should handle 100% percentage', () => {
      expect(calc.percentage(100, 100)).toBe(100);
      expect(calc.percentage(50, 100)).toBe(50);
      expect(calc.percentage(0, 100)).toBe(0);
    });

    test('should handle decimal percentages', () => {
      expect(calc.percentage(100, 12.5)).toBe(12.5);
      expect(calc.percentage(80, 33.75)).toBe(27);
      expect(calc.percentage(1000, 0.5)).toBe(5);
    });

    test('should handle negative values', () => {
      expect(calc.percentage(-100, 25)).toBe(-25);
      expect(calc.percentage(100, -25)).toBe(-25);
      expect(calc.percentage(-100, -25)).toBe(25);
    });

    test('should handle large numbers', () => {
      expect(calc.percentage(1000000, 10)).toBe(100000);
      expect(calc.percentage(10000, 150)).toBe(15000);
    });

    test('should handle percentage greater than 100', () => {
      expect(calc.percentage(100, 150)).toBe(150);
      expect(calc.percentage(50, 200)).toBe(100);
    });

    test('should handle zero base value', () => {
      expect(calc.percentage(0, 25)).toBe(0);
      expect(calc.percentage(0, 100)).toBe(0);
      expect(calc.percentage(0, 0)).toBe(0);
    });

    test('should handle small decimals', () => {
      expect(calc.percentage(0.5, 50)).toBe(0.25);
      expect(calc.percentage(0.01, 100)).toBe(0.01);
    });
  });

  // Issue #5 - Comprehensive tests for sqrt
  describe('sqrt', () => {
    test('should calculate square root of positive numbers', () => {
      expect(calc.sqrt(16)).toBe(4);
      expect(calc.sqrt(25)).toBe(5);
      expect(calc.sqrt(1)).toBe(1);
    });

    test('should return 0 for sqrt of 0', () => {
      expect(calc.sqrt(0)).toBe(0);
    });

    test('should handle decimal results', () => {
      expect(calc.sqrt(2)).toBeCloseTo(1.414);
      expect(calc.sqrt(3)).toBeCloseTo(1.732);
    });

    test('should throw error for negative numbers', () => {
      expect(() => calc.sqrt(-1)).toThrow('Cannot calculate square root of negative number');
      expect(() => calc.sqrt(-100)).toThrow();
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