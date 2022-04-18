import { createStitches } from '@stitches/react';


export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  // The default theme to use.
  theme: {
    colors: {
      one: "#81C995",
      two: "#B14E46",
      b1: "rgb(250,250,250)",
      b2: "rgb(31,33,34)",
      gray900: "hsl(105,5%,7%)",
      gray700: "hsl(205,5%,25%)",
      gray500: "hsl(205,5%,35%)",
      gray50: "hsl(205,5%,95%)",
      blue500: "hsl(205,90%,45%)",


      buttoncolor:"$one",
      primary: "$gray900",
      secondary: "$gray700",
      tertiary: "$gray500",
      link: "$blue500",
      background: "$b1",
      antibackground: "$b2",

      border: "$gray900",
    },
    fontSizes: {
      100: "2.5rem",
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
  
    heights:{
      h1: "5rem",
      h2: "10rem",
    },
  
  },

 
  media: {
    bp1: '(min-width: 750px)',
    bp2: '(max-width: 749px)',
    bp3: '(min-width: 1024px)',
    
    dark: "(prefers-color-scheme: dark)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});

//this is the dark theme
export const darkTheme = createTheme({
  colors: {

    buttoncolor: "$two",
    primary: "$gray100",
    secondary: "$gray200",
    tertiary: "$gray300",
    link: "$blue500",
    background: "$b2",
    antibackground: "$b1",
    border: "$gray100",
  },
  space: {},
  fonts: {},
});
