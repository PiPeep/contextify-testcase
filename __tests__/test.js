'use strict';

jest.autoMockOff();

var eslint = require('eslint');
var ESLintTester = require('eslint-tester');
ESLintTester.setDefaultConfig({
  parser: 'babel-eslint',
});
var eslintTester = new ESLintTester(eslint.linter);

eslintTester.addRuleTest(require.resolve('../eslint-rule'), {
  valid: [
    '<div/>',
  ],
  invalid: [
    {
      code: '',
      errors: [],
    },
  ],
});
