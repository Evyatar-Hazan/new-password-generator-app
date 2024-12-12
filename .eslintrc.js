module.exports = {
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', '@react-native'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    '@typescript-eslint',
    'justinanastos',
    'simple-import-sort',
    'reanimated',
  ],
  ignorePatterns: [
    "__tests__/**", 
    ".eslintrc.js",
   "*.config.js",
   "scripts/*.js",
   "index.js",
    "*.test.tsx",
    "*.test.ts",
    ],
  rules: {
    'arrow-body-style': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-var-requires': 'warn',
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': ['error', { 'prefer-inline': false }],
    'import/prefer-default-export': 'off',
    'justinanastos/switch-braces': 'error',
    'no-bitwise': 'off',
    'no-console': 'error',
    'no-debugger': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useAnimatedStyle|useDerivedValue|useAnimatedProps)',
      },
    ],
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message: 'No need to import this.',
          },
          {
            name: 'react-redux',
            importNames: ['useDispatch'],
            message: 'Use useAppDispatch from `~/redux/store` instead.',
          },
          {
            name: 'react-redux',
            importNames: ['useSelector'],
            message: 'Use useAppSelector from `~/redux/store` instead.',
          },
          {
            name: 'lodash',
            message: 'Use lodash/fp instead.',
          },
          {
            name: '@leumi/theme',
            importNames: ['defaultTheme'],
            message: 'Import useTheme() from ~/theme instead.',
          },
          {
            name: 'react-native',
            importNames: ['KeyboardAvoidingView'],
            message:
              'Use component KeyboardDemoView from ~/components/keyboardDemoView/keyboardDemoView instead.',
          },
          {
            name: 'react-native',
            importNames: ['Text'],
            message:
              'Use the Text component from ~/components/typography/text instead.',
          },
          {
            name: 'react-native',
            importNames: ['View'],
            message:
              'Use the Box component from ~/components/containers/box  instead.',
          },
          {
            name: 'react-native',
            importNames: ['TouchableOpacity'],
            message:
              'Use the AccessibleRectButton component from ~/components/button/accessibleRectButton instead.',
          },
          {
            name: 'react-native-redash',
            importNames: ['useTranslation'],
            message: 'Use the import from react-i18next.',
          },
        ],
      },
    ],
    'no-shadow': 'off',
    'no-spaced-func': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-nested-ternary': 'warn',
    'max-lines': ['error', { max: 250, skipComments: true }],
    'max-params': ['warn', { max: 4 }],
    'no-else-return': 'warn',
    'no-param-reassign': 'warn',
    'no-throw-literal': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-useless-catch': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'require-await': 'warn',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react-native/no-inline-styles': 'off',
    'react/jsx-closing-bracket-location': [
      'warn',
      { selfClosing: 'line-aligned', nonEmpty: 'after-props' },
    ],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'error',
    'reanimated/js-function-in-worklet': 'error',
    'reanimated/unsupported-syntax': 'error',
    'reanimated/no-multiple-animated-style-usages': 'error',
    curly: 'error',
    eqeqeq: 'error',
    'simple-import-sort/imports': 'error',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
        ],
      },
      'eslint-import-resolver-custom-alias': {
        alias: {
          '~': './src',
        },
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.jpg',
          '.png',
          '.svg',
          '.d.ts',
        ],
      },
    },
    react: {
      version: 'detect',
    },
  },
  globals: {
    __DEV__: true,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // packages first
              ['^react', '^@?\\w'],
              // types
              ['^~/@types'],
              // src
              [
                '^~/api',
                '^~/constants',
                '^~/theme',
                '^~/i18n',
                '^~/store',
                '^~/selectors',
                '^~/states',
                '^~/',
                '^~/utils',
              ],
              // components
              ['^~/components'],
              // parent files
              ['^\\.\\.'],
              // local files
              ['^\\.'],
              // local components
              ['^\\./components'],
            ],
          },
        ],
      },
    },
  ],
};
