import { colorCode, fontFamily } from './constants';

/* 
// const pluginTypography = require('@tailwindcss/typography');
// const pluginForms = require('@tailwindcss/forms');
*/
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
        /*
        pluginTypography, 
        pluginForms       
        */
        pluginContainerQueries,
        pluginAspectRatio,
    ],
}