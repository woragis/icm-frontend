import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      form: {
        border: string;
        label: string;
        background: string;
        shadow: string;
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
      footer: {
        background: string;
        text: string;
      };

      main: string;
      text: string;
      shadow: string;
      background: string;
      secondary: string;
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
