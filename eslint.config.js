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
        'curly': ['error', 'multi-line'],
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
