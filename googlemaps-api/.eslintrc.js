const fs = require('fs');
const path = require('path');

const getAllDirs = (dir) => {
  const directoryPath = path.join(__dirname, dir);
  const files = fs.readdirSync(directoryPath);
  return files.map((dir) => dir.split('.')[0]);
};

module.exports = {
  extends: ['@snc/eslint-config'],
  rules: {
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            // prints 'dir,dir/**' for each dir
            pattern: `{${getAllDirs('src').join(',')},${getAllDirs('src')
              .map((dir) => `${dir}/**`)
              .join(',')}}`,
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
};
