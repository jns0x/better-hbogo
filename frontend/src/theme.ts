import { DefaultTheme, css } from "styled-components";

const colors = {
  white: "#fff",
  black: "#000",
  gray: "#999",
  darkGray: "#242424",
  orange: "#e1981a",
  lightOrange: "#fab133",
  blue: "#059",
  lightBlue: "#0091ea",
  transparent: "transparent",
};

const generalPadding = css`
  padding: 0 4%;
  @media screen and (min-width: 1500px) {
    padding: 0 60px;
  }
`;

export const darkTheme: DefaultTheme = {
  colors,
  main: {
    color: colors.white,
    backgroundColor: colors.black,
  },
  buttons: {
    default: {
      color: colors.white,
      backgroundColor: colors.transparent,
      boxShadow: colors.gray,
      hover: colors.lightBlue,
    },
    orange: {
      color: colors.white,
      backgroundColor: colors.orange,
      boxShadow: colors.orange,
      hover: colors.lightOrange,
    },
    blue: {
      color: colors.white,
      backgroundColor: colors.blue,
      boxShadow: colors.blue,
      hover: colors.lightBlue,
    },
  },
  generalPadding,
};
