import Logo from "../../assets/images/header-logo.svg";
import StyledFooter from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <a href="/">
        <img src={Logo} alt="NetflixRoulette" />
      </a>
    </StyledFooter>
  );
};

export default Footer;
