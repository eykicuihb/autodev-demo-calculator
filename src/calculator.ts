import { isValidNumber } from './utils';

/**
 * Calculator class with basic arithmetic operations
 * Note: This implementation has some intentional bugs for AutoDev testing
 */
export class Calculator {
  /**
   * Add two numbers
   * @param a - First number
   * @param b - Second number
   * @returns Sum of a and b
   */
  add(a: number, b: number): number {
    // TODO: Issue #3 - Add input validation
    return a + b;
  }

  /**
   * Subtract two numbers
   * @param a - First number
   * @param b - Second number
   * @returns Difference of a and b
   */
  subtract(a: number, b: number): number {
    // TODO: Issue #3 - Add input validation
    return a - b;
  }

  /**
   * Multiply two numbers
   * @param a - First number
   * @param b - Second number
   * @returns Product of a and b
   */
  multiply(a: number, b: number): number {
    // TODO: Issue #3 - Add input validation
    return a * b;
  }

  /**
   * Divide two numbers
   * @param a - First number (dividend)
   * @param b - Second number (divisor)
   * @returns Quotient of a and b
   * @throws Error if division by zero
   */
  divide(a: number, b: number): number {
    // TODO: Issue #1 - Division by zero not handled properly
    // TODO: Issue #3 - Add input validation
    return a / b;
  }

  /**
   * Calculate percentage
   * @param value - Base value
   * @param percentage - Percentage to calculate
   * @returns Percentage of value
   */
  percentage(value: number, percentage: number): number {
    // TODO: Issue #3 - Add input validation
    return (value * percentage) / 100;
  }

  /**
   * Calculate square root
   * @param num - Number to find square root of
   * @returns Square root of num
   * @throws Error if num is negative
   */
  sqrt(num: number): number {
    if (num < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(num);
  }

  // TODO: Issue #2 - Missing power function
  // Need to implement: power(base: number, exponent: number): number
}