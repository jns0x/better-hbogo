// import original module declarations
import "styled-components";

// and extend them!

type Colors =
  | "white"
  | "black"
  | "gray"
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
  }
}
