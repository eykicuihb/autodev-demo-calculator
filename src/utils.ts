/**
 * Simple calculator utility functions
 */

/**
 * Validates if a value is a valid number
 * @param value - Value to validate
 * @returns True if value is a valid number
 */
export function isValidNumber(value: any): boolean {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

/**
 * Formats a number to fixed decimal places
 * @param num - Number to format
 * @param decimals - Number of decimal places
 * @returns Formatted number string
 */
export function formatNumber(num: number, decimals: number = 2): string {
  if (!isValidNumber(num)) {
    throw new Error('Invalid number provided');
  }
  return num.toFixed(decimals);
}

/**
 * Rounds a number to specified precision
 * @param num - Number to round
 * @param precision - Decimal places
 * @returns Rounded number
 */
export function round(num: number, precision: number = 0): number {
  if (!isValidNumber(num)) {
    throw new Error('Invalid number provided');
  }
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
}