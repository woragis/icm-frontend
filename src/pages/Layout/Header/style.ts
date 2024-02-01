import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.color.normalPrimary};
  height: 50px;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);

  position: sticky;
  box-shadow: 0 10px 100px 10px ${(props) => props.theme.color.darkSecondary};
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
    fill: ${(props) => props.theme.color.darkAccent};
  }
`;

export const StyledNavTheme = styled.aside``;
