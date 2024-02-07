import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  height: 120px;
  color: ${(props) => props.theme.color.normalNeutral};
  background-color: ${(props) => props.theme.color.darkNeutral};
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

export const FooterLink = styled.a`
  a {
    margin-top: 2px;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`;
