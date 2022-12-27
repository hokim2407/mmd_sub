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

// 컬러
const ColorSet = {
  css: {
    text: 'color',
    bg: 'backgroundColor',
    border: 'borderColor',
  },
  target: color,
};

// 폰트 크기
const fontSizeSet = {
  css: {
    font: 'fontSize',
    width: 'width',
    height: 'height',
  },
  target: fontSize,
};

// 폰트 weight
const fontWeightSet = {
  100: 'NotoSansKR-Thin',
  200: 'NotoSansKR-Light',
  300: 'NotoSansKR-Regular',
  400: 'NotoSansKR-Medium',
  500: 'NotoSansKR-Bold',
};
const fontWeightStyle = {};
Object.keys(fontWeightSet).map(key => {
  fontWeightStyle[`noto-${key}`] = {
    fontFamily: fontWeightSet[key],
    includeFontPadding: false,
  };
});

// 레이아웃
const layoutSet = ['center', 'start', 'end', 'between'];
const layoutStyle = {};
layoutSet.map(layout => {
  layoutStyle[`flex-row-${layout}`] = `flex-row justify-${layout} items-center`;
  layoutStyle[`flex-${layout}`] = `flex justify-${layout} items-center`;
});

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
        ...layoutStyle,
        ...fontWeightStyle,
        shadow: {
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.5,
          elevation: 3,
          zIndex: 3,
        },
      });
    }),
  ],
};
