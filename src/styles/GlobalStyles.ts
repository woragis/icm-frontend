import styled, { createGlobalStyle, keyframes } from "styled-components";
import { shade, transparentize } from "polished";
import { animated } from "@react-spring/web";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Oswald", sans-serif;
    text-decoration: none;
    transition: 500ms;
    color: ${(props) => props.theme.color.main};
    outline: none;
  }

  body {
    overflow-x: hidden;
  }
`;

const NeonFormBorder = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const FormBorder = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 810px;
  background-color: ${(props) => props.theme.color.background};
  z-index: 0;
  /* box-shadow: 0 0 30px ${(props) => props.theme.color.form.shadow}; */
  overflow: hidden;

  // put limit here
  &::before {
    //put inside limit here (color)
  }
  &::after {
    // put border here
    content: "";
    position: absolute;
    top: 50%;
    left: -50%;
    transform: translate(-50%, -50%);
    height: 10%;
    width: 200%;
    background-color: ${(props) => props.theme.shadow.color.main};
    box-shadow: 0 0 10px 100px ${(props) => props.theme.color.form.shadow};
    animation-name: ${NeonFormBorder};
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-delay: 0ms;
    animation-iteration-count: infinite;
    z-index: -1;
  }
`;

export const Form = styled.form`
  width: 800px;
  min-height: 720px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-style: solid;
  border-width: 0 3px;
  border-radius: 0px;
  border-color: ${(props) => props.theme.color.form.border};
  background-color: ${(props) => props.theme.color.form};
  box-shadow: ${(props) => props.theme.shadow.color.neon} 0 0 30px ${(props) => props.theme.color.form.shadow};
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

export const Field = styled.article`
  transition: 1s;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 480px;
  margin: 5px 0;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 20px;
  }

  &:focus-within {
    *::before {
      width: 360px;
    }
  }
`;

export const DefinedInput: any = styled.p`
  background-color: ${(props) => props.theme.color.form.input.background};
  height: 60px;
  font-size: 1.5em;
  border-radius: 10px;
  padding: 8px;
  text-align: center;
  border: none;
  outline: none;
  font-style: italic;
  font-weight: normal;
  color: ${(props) => transparentize(0.5, props.theme.color.form.input.text)};
`;

export const Label = styled.label`
  text-align: center;
  color: ${(props) => props.theme.color.form.label};
  font-size: 1.4em;
  font-weight: normal;
  margin: 5px 0;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    height: 1px;
    width: 100px;
    background-color: ${(props) => props.theme.color.form.label};
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
  background-color: ${(props) => props.theme.color.form.input.background};
  color: ${(props) => props.theme.color.form.input.text};
  border: none;
`;

export const Button = styled.button`
  outline: none;
  height: 60px;
  font-size: 1.5em;
  border-radius: 10px;
  padding: 8px;
  text-align: center;
  background-color: ${(props) => props.theme.color.form.input.background};
  color: ${(props) => props.theme.color.form.input.text};
  border: none;
  position: relative;
  overflow: hidden;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.color.form.input.background};
    z-index: -1;
    transition: 300ms ease-in-out;
  }
  &:hover {
    cursor: pointer;
    &::before {
      width: 250%;
      height: 500px;
    }
    span {
      z-index: 2;
    }
  }
  &:active {
    background-color: ${(props) => shade(0.2, props.theme.color.form.input.text)};
    &::before {
      width: 0;
    }
  }
  &::before {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.color.form.input.text};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 0px;
    height: 800px;
    transition: 200ms ease-in-out;
    z-index: 1;
  }
`;

export const TextArea = styled.textarea`
  outline: none;
  border-radius: 10px;
  padding: 8px;
  background-color: ${(props) => props.theme.color.form.input.background};
  color: ${(props) => props.theme.color.form.input.text};
  border: none;
  height: 120px;
  font-size: 1em;
  text-align: left;
`;

export const Select = styled.select`
  outline: none;
  height: 60px;
  font-size: 1.5em;
  font-weight: normal;
  border-radius: 10px;
  padding: 8px;
  text-align: center;
  background-color: ${(props) => props.theme.color.form.input.background};
  color: ${(props) => props.theme.color.form.input.text};
  border: none;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.form.label};
`;

export const Description = styled.h2`
  color: ${(props) => props.theme.color.form.label};
`;

export const Main = styled(animated.main)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.background};
  min-height: 90vh;
  overflow: hidden;
`;

export const FormDialog = styled.figure`
  font-size: 0.9em;
  text-align: center;
  position: absolute;
  top: 20%;
  left: 100%;
  transform: translate(-50%, 0);
  background-color: ${(props) => props.theme.color.form.background};
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
  top: 600px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${(props) => props.theme.color.form.background};
  border: ${(props) => props.theme.color.form.border} 1px solid;
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
  border: ${(props) => props.theme.color.form.border} solid 2px;
  box-shadow: ${(props) => props.theme.shadow.color.neon} 0 0 10px ${(props) => props.theme.color.form.shadow};
  border-radius: 3px;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    max-width: 100%;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 0 10px ${(props) => props.theme.color.form.shadow};
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
    border: solid ${(props) => props.theme.color.form.background};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckEmail = styled.figure`
  position: relative;
  width: 470px;
  * {
    position: absolute;
    left: 10px;
    top: -47px;
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
