import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Oswald", sans-serif;
    text-decoration: none;
    transition: width 500ms;
    color: ${(props) => props.theme.color.lightNeutral};
  }


  * > main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.background};
    min-height: 90vh;
  }

  * > form {
    width: 600px;
    min-height: 300px;
    margin: 30px;
    padding: 30px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: white;
    border: 3px solid ${(props) => props.theme.color.darkPrimary};
    border-radius: 10px;
    background-color: transparent;
    box-shadow: inset 0 0 ${(props) => props.theme.shadow.medium} ${(props) =>
  props.theme.color.lightPrimary};

  position: relative;
  z-index: 2;
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border: 3px solid transparent;
    border-radius: 10px;
    background: transparent;
    box-shadow: 0 0 ${(props) => props.theme.shadow.medium} ${(props) =>
  props.theme.color.lightPrimary};
    z-index: -1;
    }
  }

  .login-element, .register-element {
    transition: 1s;
    color: ${(props) => props.theme.color.lightPrimary};

    label {
      text-align: center;
      color: ${(props) => props.theme.color.lightPrimary};      
      font-size: 1.4em;
      font-weight: 700;
      margin: 5px 0;
      
      position: relative;
      &::after {
        position: absolute;
        content: '';
        height: 1px;
        width: 100px;
        background-color: ${(props) => props.theme.color.lightPrimary};
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 10px;
        transition: 500ms;
      }
    }
    input {
      outline: none;
      height: 60px;
      font-size: 1.5em;
      border-radius: 10px;
      padding: 8px;
      text-align: center;
    }
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 80%;
    margin: 5px 0;

    .show-password {
      font-size: 0.9em;
      display: inline;
    }
    &:focus-within {
      *::after {
        width: 360px;
      }
    }
  }
  .password-input {
    display: flex;
    #password {
      width: 100%;
    }
    .show-password {
      font-size: 0.9em;
      font-weight: 500;
    }
  }
`;

export default GlobalStyles;
