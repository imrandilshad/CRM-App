const pluginCustom = require("tailwindcss/plugin");
import { colorCode, fontFamily } from './constants';

module.exports = pluginCustom(
    function ({ addBase }) {
        addBase({
            [`body`]: {
                fontFamily: fontFamily.fontPrimarySourcePoppinMonst,
                backgroundColor: colorCode.colorSecondaryNakedGrey,
                color: colorCode.colorSecondaryBluePebble,
                overflowX: 'hidden',
            },
            [`a`]: {
                color: colorCode.colorSecondaryBlackPearl,
            },
            [`.container`]: {
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "16px",
                paddingRight: "16px",
            },
            [`body`]: {
                fontFamily: fontFamily.fontPrimarySourcePoppinMonst,
                backgroundColor: colorCode.colorSecondaryNakedGrey,
                color: colorCode.colorSecondaryBluePebble,
                overflowX: 'hidden',
            },
            [`.img-fluid, .img-fit`]: {
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
            },
        });
    }
);