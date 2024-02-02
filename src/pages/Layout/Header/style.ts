import styled, { keyframes } from "styled-components";
import { shade } from "polished";

const neonLineAnimation = keyframes`
  0% {
    transform: translate(-100%);
  }
  100% {
    transform: translate(100vw);
  }
`;

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.color.darkNeutral};
  height: 50px;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  * {
    transition: 0s;
  }

  z-index: 2;
  position: relative;
  box-shadow: 0 1px 30px 1px ${(props) => props.theme.color.darkSecondary};

  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: ${(props) => shade(0.5, props.theme.color.darkPrimary)};
    bottom: -3px;
    left: 0;
    z-index: 10;
  }
  &::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 20%;
    background-color: ${(props) => props.theme.color.lightPrimary};
    box-shadow: 0 0 10px 2px ${(props) => props.theme.color.lightPrimary};
    bottom: -3px;
    left: 0;
    z-index: 11;
    animation: ${neonLineAnimation} 10s infinite linear;
  }

  .header-logo {
    margin: 10px auto 0 10px;
    /* margin-left: 30px;
    margin-right: auto; */
    /* width: 260px; */

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    position: relative;

    p {
      position: absolute;
      top: 50%;
      right: -90%;
      transform: translate(0, -50%);
      color: ${(props) => props.theme.color.normalPrimary};
      font-size: 2em;
    }
  }
`;

export const StyledNavLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin-left: 20px;
    color: ${(props) => props.theme.color.normalNeutral};
  }
`;

export const StyledLogo = styled.svg`
  width: 180px;
  height: 55px;
  g {
    fill: ${(props) => props.theme.color.normalPrimary};
  }
`;

export const StyledNavTheme = styled.aside``;
