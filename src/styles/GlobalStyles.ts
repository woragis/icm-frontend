import styled, { createGlobalStyle } from "styled-components";
import { shade } from "polished";
import { animated } from "@react-spring/web";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Oswald", sans-serif;
    text-decoration: none;
    transition: 500ms;
    color: ${(props) => props.theme.color.lightNeutral};
    outline: none;
  }

  body {
    overflow-x: hidden;
  }
  .check-email {
    position: relative;
  width: 80%;
  * {
    position: absolute;
    left: 10px;
    top: -48px;
    font-size: 1.5em;
  }
  #ban {
    * {
      color: red;
    }
  }
  #check {
    * {
      color: green;
    }
  }
  }
`;
export const Form = styled.form`
  width: 600px;
  min-height: 300px;
  margin: 30px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  border: 3px solid ${(props) => props.theme.color.form.border};
  border-radius: 10px;
  background-color: transparent;
  box-shadow: ${(props) => props.theme.shadow.color.neon} 0 0 ${(props) => props.theme.shadow.size.medium} ${(props) => props.theme.color.lightPrimary};
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border: 3px solid transparent;
    border-radius: 10px;
    background: transparent;
    box-shadow: 0 0 ${(props) => props.theme.shadow.size.medium} ${(props) => props.theme.shadow.color.main};
    z-index: -1;
  }
`;

export const Field = styled.article`
  transition: 1s;
  color: ${(props) => props.theme.color.lightPrimary};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 80%;
  margin: 5px 0;

  &:focus-within {
    *::before {
      width: 360px;
    }
  }

  .available-email {
    background-color: ${(props) => props.theme.color.darkNeutral};
    height: 60px;
    font-size: 1.5em;
    border-radius: 10px;
    padding: 8px;
    text-align: center;
    border: none;
    outline: none;
    font-style: italic;
    font-weight: normal;
    color: ${(props) => shade(0.3, props.theme.color.lightNeutral)};
  }
`;

export const Label = styled.label`
  text-align: center;
  color: ${(props) => props.theme.color.form.label.color};
  font-size: 1.4em;
  font-weight: 700;
  margin: 5px 0;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    height: 1px;
    width: 100px;
    background-color: ${(props) => props.theme.color.lightPrimary};
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 10px;
    transition: 500ms;
  }
`;

export const Input = styled.input`
  outline: none;
  height: 60px;
  font-size: 1.5em;
  border-radius: 10px;
  padding: 8px;
  text-align: center;
  background-color: ${(props) => props.theme.color.darkNeutral};
  border: none;
`;

export const Button = styled.button`
  outline: none;
  height: 60px;
  font-size: 1.5em;
  border-radius: 10px;
  padding: 8px;
  text-align: center;
  background-color: ${(props) => props.theme.color.darkNeutral};
  border: none;
`;

export const TextArea = styled.textarea`
  outline: none;
  border-radius: 10px;
  padding: 8px;
  background-color: ${(props) => props.theme.color.darkNeutral};
  border: none;
  height: 120px;
  font-size: 1em;
  text-align: left;
`;

export const Select = styled.select`
  outline: none;
  height: 60px;
  font-size: 1.5em;
  border-radius: 10px;
  padding: 8px;
  text-align: center;
  background-color: ${(props) => props.theme.color.darkNeutral};
  border: none;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.form.label.color};
`;

export const Description = styled.h2`
  color: ${(props) => props.theme.color.form.label.color};
`;

export const Main = styled(animated.main)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.background};
  min-height: 90vh;
`;

export const FormDialog = styled.figure`
  font-size: 0.6em;
  text-align: center;
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${(props) => props.theme.color.darkNeutral};
  border: yellow 1px solid;
  height: auto;
  width: 350px;
  padding: 10px;
  border-radius: 10px;
  svg {
    height: 30px;
    width: 30px;
  }
  span {
    font-weight: bold;
    font-size: 1.1em;
  }
`;
export const AlertDialog = styled.figure`
  font-size: 1em;
  text-align: center;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${(props) => props.theme.color.darkNeutral};
  border: ${(props) => props.theme.color.lightSecondary} 1px solid;
  height: auto;
  width: 350px;
  padding: 10px;
  border-radius: 10px;
  z-index: 30;
  svg {
    height: 30px;
    width: 30px;
  }
  span {
    font-weight: bold;
    font-size: 1.1em;
  }
`;
export const Password = styled.div`
  display: flex;
  position: relative;
  #password {
    width: 100%;
  }
  #show-password {
    position: absolute;
    right: 20px;
    font-size: 0.9em;
    font-weight: 500;
  }
`;

export const ShowPassword = styled.label`
  display: block;
  position: absolute;
  padding-left: 35px;
  top: 18px;
  right: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &::after,
  &::before {
    content: "";
    position: relative;
    height: 100%;
    max-width: 100%;
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  span {
  }
  &:hover input ~ span {
    background-color: ${(props) => props.theme.color.background};
  }
  input:checked ~ span {
    background-color: ${(props) => props.theme.color.background};
  }
  & input:checked ~ span::after {
    display: block;
  }
`;

export const ShowPasswordSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  max-width: 25px;
  background-color: ${(props) => props.theme.color.background};
  border: ${(props) => props.theme.color.lightSecondary} solid 2px;
  box-shadow: ${(props) => props.theme.shadow.color.neon} 0 0 10px ${(props) => props.theme.color.lightPrimary};
  border-radius: 3px;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    max-width: 100%;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 0 10px ${(props) => props.theme.color.lightPrimary};
    top: 0;
    left: 0;
  }
  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 10px;
    bottom: 5px;
    width: 10px;
    height: 30px;
    border: solid ${(props) => props.theme.shadow.color.main};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckEmail = styled.figure`
  position: relative;
  width: 80%;
  * {
    position: absolute;
    left: 10px;
    top: -48px;
    font-size: 1.5em;
  }
  #ban {
    * {
      color: red;
    }
  }
  #check {
    * {
      color: green;
    }
  }
`;

export default GlobalStyles;
