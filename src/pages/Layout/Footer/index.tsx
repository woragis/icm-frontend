import { StyledFooter, StyledFooterSection } from "./style";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterSection className="social-media icm">
        Direitos Reservados A ICM da Regiao Nordeste
        <a href="https://www.instagram.com/igrejacristamaranata_oficial/">
          <FaInstagram /> - Igreja Crista Maranata
        </a>
      </StyledFooterSection>
      <StyledFooterSection className="social-media jezreel">
        <a href="https://www.github.com/woragis">
          <FaGithub /> Github - woragis
        </a>
        <a href="https://www.linkedin.com/woragis">
          <FaLinkedin /> Linkedin - Jezreel de Andrade
        </a>
        <a href="https://www.instagram.com/y.jezreel.andrade">
          <FaInstagram /> Instagram - y.jezreel.andrade
        </a>
      </StyledFooterSection>
    </StyledFooter>
  );
};

export default Footer;
