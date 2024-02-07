import { StyledFooter, FooterSection, FooterLink } from "./style";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterSection className="social-media icm">
        Direitos Reservados A ICM da Regiao Nordeste
        <FooterLink href="https://www.instagram.com/igrejacristamaranata_oficial/">
          <FaInstagram /> - Igreja Crista Maranata
        </FooterLink>
      </FooterSection>
      <FooterSection className="social-media jezreel">
        <FooterLink href="https://www.github.com/woragis">
          <FaGithub /> Github - woragis
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/woragis">
          <FaLinkedin /> Linkedin - Jezreel de Andrade
        </FooterLink>
        <FooterLink href="https://www.instagram.com/y.jezreel.andrade">
          <FaInstagram /> Instagram - y.jezreel.andrade
        </FooterLink>
      </FooterSection>
    </StyledFooter>
  );
};

export default Footer;
