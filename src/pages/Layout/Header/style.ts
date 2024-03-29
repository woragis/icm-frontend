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
  * {
    transition: 0s;
  }

  background-color: ${(props) => props.theme.color.header.background};
  height: 50px;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  z-index: 2;
  position: relative;
  width: 100%;
  box-shadow: 0 1px 30px 1px ${(props) => props.theme.color.header.shadow};

  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: ${(props) => shade(0.2, props.theme.color.header.logo)};
    bottom: -3px;
    left: 0;
    z-index: 10;
  }

  &::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 20%;
    background-color: ${(props) => props.theme.color.header.logo};
    box-shadow: 0 0 10px 2px ${(props) => props.theme.color.header.logo};
    bottom: -3px;
    left: 0;
    z-index: 11;
    animation: ${neonLineAnimation} 10s infinite linear;
  }
`;

export const Logo = styled.figure`
  margin: 0px auto 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  position: relative;

  @media screen and (max-width: 1024px) {
    margin: 0 auto 0 10px;
  }
`;

interface NavProps {
  show: boolean;
}

export const StyledNavLinks = styled.nav<NavProps>`
  display: flex;
  justify-content: end;
  width: 100%;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 1024px) {
    height: 100%;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    width: 100lvw;
    top: 0;
    left: 0;
    opacity: ${(props) => (props.show ? 1 : 0)};
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    transform: translateY(${(props) => (props.show ? "0" : "-10px")});
    background-color: ${(props) => props.theme.color.header.hover};
    transition: 500ms ease-in-out;
    font-size: 1.5em;
    z-index: 14;
  }

  a {
    color: ${(props) => props.theme.color.header.links};

    @media screen and (max-width: 1024px) {
      color: ${(props) => shade(0.8, props.theme.color.header.hover)};
      text-shadow: ${(props) => props.theme.color.header.shadow} 0px 0px 30px;
      margin-bottom: 5px;
    }
  }
`;

interface ThemeProps {
  show: boolean;
}

export const MobileNav = styled.figure<ThemeProps>`
  display: none;
  * {
    color: ${(props) => props.theme.color.header.links};
  }
  @media screen and (max-width: 1024px) {
    display: block;
    position: ${(props) => (props.show ? "fixed" : "absolute")};
    top: -4px;
    right: 10px;
    z-index: 20;
    font-size: 40px;
    * {
      color: ${(props) => (props.show ? shade(0.5, props.theme.color.header.hover) : props.theme.color.header.links)};
    }
  }
`;

export const StyledLogo = styled.svg`
  width: 180px;
  height: 55px;
  g {
    fill: ${(props) => props.theme.color.header.logo};
  }
`;

export const StyledNavTheme = styled.aside<ThemeProps>`
  position: relative;
  width: 130px;
  margin-top: -47px;

  @media screen and (max-width: 1024px) {
    position: absolute;
    margin-top: 0;
    top: 50px;
    right: 10px;
    width: 100px;
  }
`;

export const ThemeButton: any = styled.figure`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0;
  position: absolute;
  top: 2px;
  right: 5px;

  svg {
    fill: ${(props) => props.theme.color.header.logo};
    font-size: 2em;
    height: 45px;
    width: 45px;
    border-radius: 45px;
    background-color: ${(props) => shade(0.2, props.theme.color.header.background)};
    padding: 1px;
    border: ${(props) => props.theme.color.header.logo} 2px solid;
    z-index: 22;

    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1024px) {
    svg {
      fill: ${(props) => shade(0.6, props.theme.color.header.hover)};
      background-color: ${(props) => props.theme.color.header.hover};
      border-color: ${(props) => shade(0.5, props.theme.color.header.hover)};
    }
  }
`;

export const ThemeTitle = styled.mark`
  color: ${(props) => props.theme.color.header.logo};
  background-color: ${(props) => shade(0.2, props.theme.color.header.background)};
  font-size: 1.5em;
  height: 45px;
  text-align: center;
  padding-right: 10px;
  width: 80px;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  border-top: ${(props) => props.theme.color.header.logo} 2px solid;
  border-right: ${(props) => props.theme.color.header.logo} 2px solid;
  border-bottom: ${(props) => props.theme.color.header.logo} 2px solid;
  position: relative;
  z-index: 21;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    border-top: 2px solid ${(props) => props.theme.color.header.logo};
    border-bottom: 2px solid ${(props) => props.theme.color.header.logo};
    height: 41px;
    top: -2px;
    left: -25px;
    width: 30px;
    background-color: ${(props) => shade(0.2, props.theme.color.header.background)};
    z-index: -1;
  }

  @media screen and (max-width: 1024px) {
    color: ${(props) => shade(0.6, props.theme.color.header.hover)};
    background-color: ${(props) => props.theme.color.header.hover};
    border-color: ${(props) => shade(0.5, props.theme.color.header.hover)};
    &::before {
      background-color: ${(props) => props.theme.color.header.hover};
      border-color: ${(props) => shade(0.5, props.theme.color.header.hover)};
    }
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
  }
`;

export const ThemeList = styled.ul<ThemeProps>`
  opacity: ${(props) => (props.show ? 1 : 0)};
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => shade(0.1, props.theme.color.header.background)};
  gap: 3px;
  position: absolute;
  padding: 25px 5px 10px;
  height: 120px;
  top: 25px;
  right: 11px;
  z-index: 20;
  border: 1px solid ${(props) => props.theme.color.header.logo};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 150px;
    background-color: ${(porps) => porps.theme.color.header.hover};
    border-color: ${(props) => shade(0.5, props.theme.color.header.hover)};
    padding: 30px 0;
  }
`;

export const Theme = styled.li`
  width: 100px;
  text-align: left;
  color: ${(props) => props.theme.color.header.links};
  list-style-type: none;
  text-shadow: ${(props) => props.theme.color.header.shadow} 0px 0px 30px;
  font-size: 0.95em;
  padding: 0 5px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 25px 60px;
  align-items: center;
  column-gap: 5px;

  svg {
    fill: ${(props) => props.theme.color.header.logo};
    font-size: 1.5em;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    background-color: ${(props) => shade(0.2, props.theme.color.header.background)};
    padding: 1px;
    border: ${(props) => props.theme.color.header.logo} 2px solid;
    z-index: 22;

    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1024px) {
    color: ${(props) => shade(0.5, props.theme.color.header.hover)};
    svg {
      fill: ${(props) => props.theme.color.header.hover};
      border-color: ${(props) => shade(0.5, props.theme.color.header.hover)};
    }
    margin-left: -20px;
  }
`;
