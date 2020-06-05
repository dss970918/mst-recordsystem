
    module.exports = {
        extends: [require.resolve('@jtl/q-eslint/.eslintrc.js')],
        rules: {
            'import/no-unresolved': [2, { ignore: ['react'] }],
            '@typescript-eslint/no-explicit-any': 0        
        }
    };    
    