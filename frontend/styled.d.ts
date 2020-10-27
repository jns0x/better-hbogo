// import original module declarations
import "styled-components";
import { CSSProp } from "styled-components";
import type {} from "styled-components/cssprop";

type Colors =
  | "white"
  | "black"
  | "gray"
  | "darkGray"
  | "orange"
  | "lightOrange"
  | "blue"
  | "lightBlue"
  | "transparent";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [color in Colors]: string };
    main: {
      color: string;
      backgroundColor: string;
    };
    buttons: {
      default: {
        color: string;
        backgroundColor: string;
        boxShadow: string;
        hover: string;
      };
      orange: {
        color: string;
        backgroundColor: string;
        boxShadow: string;
        hover: string;
      };
      blue: {
        color: string;
        backgroundColor: string;
        boxShadow: string;
        hover: string;
      };
    };
    generalPadding: CSSProp;
  }
}
