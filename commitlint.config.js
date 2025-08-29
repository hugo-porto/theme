module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    // Ignore semantic-release generated commits
    (message) => message.startsWith('chore(release):'),
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert'],
    ],
    'subject-case': [2, 'never', ['pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 140],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 140],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 140],
  },
};
