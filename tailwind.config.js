// tailwind.config.js
const {plugin} = require('twrnc');
const {color, fontSize} = require('./srcs/configs/Conf_Style');

const makeUtility = cssSet => {
  const resultUtil = Object.keys(cssSet.css).reduce((acc, curCss) => {
    Object.keys(cssSet.target).map(key => {
      acc[`${curCss}-${key}`] = {};
      acc[`${curCss}-${key}`][cssSet.css[curCss]] = cssSet.target[key];
    });
    return acc;
  }, {});
  return resultUtil;
};

const ColorSet = {
  css: {
    text: 'color',
    bg: 'backgroundColor',
    border: 'borderColor',
  },
  target: color,
};

const fontSizeSet = {
  css: {
    font: 'fontSize',
    width: 'width',
    height: 'height',
  },
  target: fontSize,
};

module.exports = {
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities(makeUtility(ColorSet));
    }),
    plugin(({addUtilities}) => {
      addUtilities(makeUtility(fontSizeSet));
    }),

    plugin(({addUtilities}) => {
      addUtilities({
        // inline-block
        'aline-center': {
          alignSelf: 'center',
        },
        'flex-row-center': 'flex-row justify-center items-center ',
        'flex-row-start': 'flex-row justify-start items-center ',
        'flex-row-end': 'flex-row justify-end items-center ',
        'flex-center': 'flex justify-center items-center ',
        'flex-start': 'flex justify-start items-center ',
        'flex-end': 'flex justify-end items-center ',
      });
    }),
  ],
};
