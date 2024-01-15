import eslintConfig from '@antfu/eslint-config';

export default eslintConfig({
    stylistic: {
        indent: 4,
        quotes: 'single',
        semi: 'always',
    },
    typescript: true,
    rules: {
        'no-console': 'off',
        'antfu/top-level-function': 'off',
        'ts/consistent-type-definitions': 'off',
        'curly': ['error', 'multi-line'],
        'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'style/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
                multilineDetection: 'brackets',
            },
        ],
    },
});
