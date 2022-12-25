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
  },
  target: fontSize,
};
console.log(makeUtility(ColorSet));

module.exports = {
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities(makeUtility(ColorSet));
    }),
    plugin(({addUtilities}) => {
      addUtilities(makeUtility(fontSizeSet));
    }),
  ],
};
