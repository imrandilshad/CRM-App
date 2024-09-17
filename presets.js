
const pluginContainerQueries = require('@tailwindcss/container-queries');
const pluginAspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
    corePlugins: {
        aspectRatio: false,
        container: false,
        typography: false,
    },
    variants: {
        aspectRatio: ['responsive', 'hover']
    },
    plugins: [
        pluginContainerQueries,
        pluginAspectRatio,
    ],
}