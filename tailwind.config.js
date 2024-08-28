/** @type {import('tailwindcss').Config} */

import { fontFamily } from './constants';

const presetDefault = require('./presets');
const pluginFeature = require('./plugin-feature');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  presets: [
    presetDefault
  ],
  theme: {
    extend: {
      containers: {
        xs: "320px",
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
        '3xl': '1920px',
      },
      keyframes: {
        topToBottom: {
          '0%': {
            top: '-4rem',
          },
          '100%': {
            top: '100%',
          },
        },
        bottomToTop: {
          '0%': {
            bottom: '-4rem',
          },
          '100%': {
            bottom: '100%',
          },
        },
        lineheight: {
          '0%': {
            height: '0%',
          },
          'to': {
            height: '100%',
          }
        },
        lineround: {
          'transform': {
            height: 'translateY(-100%)',
          },
          'transform': {
            height: 'translateY(200%)',
          }
        },
        preloadedzero: {
          '0%': {
            width: '50%',
          },
          'to': {
            width: '0',
          }
        },
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        top_bottom: 'topToBottom 25s linear infinite',
        bottom_top: 'bottomToTop 25s linear infinite',
        lineheight: 'lineheight 1s ease-in-out 0s forwards',
        lineround: 'lineround 1.2s linear 2s infinite',
        preloadedzero: 'preloadedzero 0.3s ease-in-out 0.5s forwards',
      },
      zIndex: {
        1: '1',
      },
      blur: {
      },
    },
  },
  plugins: [
    pluginFeature,
  ],
}
