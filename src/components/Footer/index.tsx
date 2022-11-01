import Logo from "../../images/header-logo.svg";
import StyledFooter from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <a href="/" className="footer-logo">
        <img src={Logo} alt="NetflixRoulette" />
      </a>
    </StyledFooter>
  );
};

export default Footer;
