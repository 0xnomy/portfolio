import { ESLintUtils } from '@typescript-eslint/utils'

export default [
    {
        ignores: ['node_modules/**', '.next/**', 'out/**'],
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: {
            '@next/next/no-html-link-for-pages': 'off',
        },
    },
]
