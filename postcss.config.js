// export default {
//     plugins: {
//         'postcss-import': {},
//         "postcss-nesting": {},
//         "tailwindcss/nesting": {},
//         tailwindcss: {},
//         autoprefixer: {},
//         ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
//     }
// }

module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nesting',
        tailwindcss: {},
        autoprefixer: {},
    }
}