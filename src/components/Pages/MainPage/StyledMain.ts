import * as T from '../../../shared/theme'
import styled from "styled-components";

const StyledMain = styled.main`
  position: relative;
  width: 100%;
  max-width: 1200px;
  flex: 1 0 auto;
  margin: 10px auto 0;
  padding: 0 5vw 20px;
  background: ${T.color.mainBg};

  @media (min-width: 1200px) {
    padding: 0 60px 20px;
  }
`;

export const StyledNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #000;

  &::after {
    position: absolute;
    bottom: 1px;
    width: 100%;
    height: 2px;
    background: #424242;
    content: '';
  }
`;



export default StyledMain;
