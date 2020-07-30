const micromatch = require('micromatch')

// It occurs that our --max-warnings 0 for eslint clashes with how lint-staged works.
// The latter tries to provide to eslint files that are ignored in .eslintignore
// which triggers a non-customizable warning and prevents the commit from being created.
// The workaround is to use a .lintstagedrc.js with lambdas that filter out offending files.

module.exports = {
  '{src,__tests__}/**/*.ts': (files) => {
    const match = micromatch.not(files, '**/proto/generated/*.ts')
    return `yarn lint:fix ${match.join(' ')}`
  },
  '*.{js,ts}': 'yarn prettier --write',
}
