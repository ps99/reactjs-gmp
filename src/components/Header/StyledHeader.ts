import styled from "styled-components";
import HeaderBG from "../../assets/images/header-bg.png";

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 396px;
  margin: 0 auto;
  background: url(${HeaderBG}) no-repeat scroll center/cover;

  & > button {
    position: absolute;
    top: 20px;
    right: 56px;
  }
`;

export const StyledLogo = styled.a`
  position: absolute;
  left: 60px;
  top: 20px;
  width: 151px;
  height: 24px;
`

export default StyledHeader;
