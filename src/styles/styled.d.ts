import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      form: {
        border: string;
        label: string;
        background: string;
        input: {
          text: string;
          background: string;
        };
      };

      header: {
        background: string;
        logo: string;
        links: string;
        shadow: string;
        hover: string;
      };

      main: string;
      text: string;
      shadow: string;
      background: string;
      secondary: string;
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
    };
    shadow: {
      size: {
        big: string;
        medium: string;
        small: string;
      };
      color: {
        main: string;
        neon: string;
      };
    };
  }
}
