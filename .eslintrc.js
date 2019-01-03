module.exports = {
  'root': true,

  'parser': 'typescript-eslint-parser',

  'plugins': [
    'typescript'
  ],

  'extends': [
    '@nighttrax/eslint-config',
    '@nighttrax/eslint-config/react',
  ],

  'rules': {
    // ESLint doesn't understand interfaces yet and marks them as undefined.
    'no-undef': 0,

    'typescript/no-unused-vars': 2
  }
};
