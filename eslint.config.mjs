import stylistic from '@stylistic/eslint-plugin';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,

    {
        plugins: {
            '@stylistic': stylistic,
            perfectionist,
        },

        rules: {
            '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
            '@stylistic/brace-style': [ 'error' ],
            '@stylistic/indent': [ 'error', 4 ],
            '@stylistic/jsx-closing-bracket-location': [ 'error' ],
            '@stylistic/jsx-closing-tag-location': [ 'error', 'tag-aligned' ],
            '@stylistic/jsx-curly-spacing': [ 'error', { children: true, when: 'always' } ],
            '@stylistic/jsx-first-prop-new-line': [ 'error', 'multiline' ],
            '@stylistic/jsx-max-props-per-line': [ 'error' ],
            '@stylistic/jsx-newline': [ 'error' ],
            '@stylistic/jsx-one-expression-per-line': [ 'error' ],
            '@stylistic/jsx-quotes': [ 'error', 'prefer-single' ],
            '@stylistic/jsx-self-closing-comp': [ 'error' ],
            '@stylistic/jsx-tag-spacing': [ 'error' ],
            '@stylistic/object-curly-spacing': [ 'error', 'always' ],
            '@stylistic/quotes': [ 'error', 'single' ],
            '@stylistic/semi': [ 'error', 'always' ],
            '@stylistic/semi-spacing': [ 'error' ],
            '@stylistic/template-curly-spacing': [ 'error', 'always' ],
            '@typescript-eslint/no-unused-vars': [ 'error' ],
            camelcase: [ 'error', { ignoreImports: true } ],
            eqeqeq: 'error',
            'no-duplicate-imports': [ 'error' ],
            'perfectionist/sort-array-includes': [ 'error' ],
            'perfectionist/sort-classes': [ 'error' ],
            'perfectionist/sort-decorators': [ 'error' ],
            'perfectionist/sort-enums': [ 'error' ],
            'perfectionist/sort-export-attributes': [ 'error' ],
            'perfectionist/sort-exports': [ 'error' ],
            'perfectionist/sort-heritage-clauses': [ 'error' ],
            'perfectionist/sort-import-attributes': [ 'error' ],
            'perfectionist/sort-imports': [ 'error' ],
            'perfectionist/sort-interfaces': [ 'error' ],
            'perfectionist/sort-intersection-types': [ 'error' ],
            'perfectionist/sort-jsx-props': [ 'error' ],
            'perfectionist/sort-maps': [ 'error' ],
            'perfectionist/sort-modules': [ 'error' ],
            'perfectionist/sort-named-exports': [ 'error' ],
            'perfectionist/sort-named-imports': [ 'error' ],
            'perfectionist/sort-object-types': [ 'error' ],
            'perfectionist/sort-objects': [ 'error' ],
            'perfectionist/sort-sets': [ 'error' ],
            'perfectionist/sort-switch-case': [ 'error' ],
            'perfectionist/sort-union-types': [ 'error' ],
            'perfectionist/sort-variable-declarations': [ 'error' ],
        },
    },

    globalIgnores([
        'node_modules/**',
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
]);

export default eslintConfig;