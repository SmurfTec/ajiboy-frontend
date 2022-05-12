// ----------------------------------------------------------------------

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:960px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1280px)': {
      fontSize: pxToRem(lg),
    },
  };
}

// const FONT_PRIMARY = 'Poppins, sans-serif';
// const FONT_PRIMARY = 'Rubrik';
// const FONT_PRIMARY = "'Corinthia', cursive";
const FONT_PRIMARY = "'Quicksand', sans-serif";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 600,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 550,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 17, lg: 19 }),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 14, md: 15, lg: 17 }),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(11),
    ...responsiveFontSizes({ sm: 11, md: 12, lg: 13 }),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 14, md: 15, lg: 16 }),
    textTransform: 'capitalize',
  },
};

export default typography;
