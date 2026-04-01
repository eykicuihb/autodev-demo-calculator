# AutoDev Demo Calculator Project

A simple TypeScript calculator library designed for testing AutoDev V2.2 workflow.

## Project Structure

```
autodev-demo-calculator/
├── src/
│   ├── calculator.ts      # Main calculator implementation
│   ├── utils.ts           # Utility functions
│   └── index.ts           # Public API exports
├── tests/
│   └── calculator.test.ts # Unit tests
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Lint
npm run lint

# Type check
npm run typecheck
```

## Known Issues (for AutoDev testing)

### Issue #1: Division by zero not handled ✅ RESOLVED
The `divide()` function now throws an error when dividing by zero.

### Issue #2: Missing power function ✅ RESOLVED
Calculator now includes a `power(base, exponent)` function.

### Issue #3: No input validation
Functions don't validate that inputs are numbers.

### Issue #5: Percentage calculator and comprehensive tests ✅ RESOLVED
Added comprehensive unit tests covering all calculator methods with 94%+ coverage.

## Usage

```typescript
import { Calculator } from 'autodev-demo-calculator';

const calc = new Calculator();

// Basic arithmetic operations
console.log(calc.add(5, 3));       // 8
console.log(calc.subtract(5, 3));  // 2
console.log(calc.multiply(5, 3));  // 15
console.log(calc.divide(6, 2));    // 3

// Percentage calculation
console.log(calc.percentage(100, 25));  // 25 (25% of 100)
console.log(calc.percentage(50, 20));   // 10 (20% of 50)
console.log(calc.percentage(1000, 5));  // 50 (5% of 1000)

// Square root
console.log(calc.sqrt(16));  // 4
console.log(calc.sqrt(25));  // 5

// Power (exponentiation)
console.log(calc.power(2, 3));  // 8 (2^3)
console.log(calc.power(5, 2));  // 25 (5^2)
```

### Error Handling

```typescript
// Division by zero throws an error
try {
  calc.divide(5, 0);
} catch (error) {
  console.error(error.message);  // "Division by zero is not allowed"
}

// Square root of negative number throws an error
try {
  calc.sqrt(-1);
} catch (error) {
  console.error(error.message);  // "Cannot calculate square root of negative number"
}

// Negative exponents throw an error
try {
  calc.power(2, -1);
} catch (error) {
  console.error(error.message);  // "Negative exponents are not supported"
}
```

### Utility Functions

```typescript
import { isValidNumber, formatNumber, round } from 'autodev-demo-calculator';

// Validate numbers
isValidNumber(5);      // true
isValidNumber(NaN);    // false
isValidNumber('5');    // false

// Format numbers to fixed decimals
formatNumber(5.123, 2);  // "5.12"
formatNumber(5, 2);      // "5.00"

// Round to precision
round(5.555, 2);  // 5.56
round(5.555, 0);  // 6
```

## License

MIT