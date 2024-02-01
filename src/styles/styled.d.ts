import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      normalPrimary: string;
      lightPrimary: string;
      darkPrimary: string;

      normalSecondary: string;
      lightSecondary: string;
      darkSecondary: string;

      normalNeutral: string;
      lightNeutral: string;
      darkNeutral: string;

      normalAccent: string;
      lightAccent: string;
      darkAccent: string;

      background: string;
    };
    shadow: {
      big: string;
      medium: string;
      small: string;
    };
  }
}
