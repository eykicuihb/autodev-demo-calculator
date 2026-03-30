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

### Issue #1: Division by zero not handled
The `divide()` function doesn't handle division by zero. Should throw an error.

### Issue #2: Missing power function
Calculator lacks a `power(base, exponent)` function.

### Issue #3: No input validation
Functions don't validate that inputs are numbers.

## Usage

```typescript
import { Calculator } from 'autodev-demo-calculator';

const calc = new Calculator();
console.log(calc.add(5, 3));      // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(6, 2));   // 3
```

## License

MIT