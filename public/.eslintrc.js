module.exports = {
    parser: '@babel/eslint-parser', // Use Babel parser for modern JavaScript support
    parserOptions: {
      ecmaVersion: 2023, // Use ECMAScript version 2023 (or newer if needed)
      sourceType: 'module', // Allow use of imports
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
    },
    env: {
      browser: true, // Enable browser environment
      es2023: true, // Enable ECMAScript 2023 syntax
    },
    plugins: ['react'], // Enable ESLint plugin for React
    extends: ['eslint:recommended', 'plugin:react/recommended'], // Use recommended ESLint rules and React-specific rules
    rules: {
      // Additional rules can be added here
      'react/jsx-uses-react': 'error', // Ensures React is in scope when using JSX
      'react/jsx-uses-vars': 'error', // Prevents unused JSX variables
    },
  };
  