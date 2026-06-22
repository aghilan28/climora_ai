module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'refactor', 'test', 'docs', 'build', 'ci', 'chore', 'perf'],
    ],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
  },
};
