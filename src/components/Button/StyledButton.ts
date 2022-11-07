import * as T from '../../shared/theme'
import styled, {css} from "styled-components";

const StyledNaviButton:any = css`
  display: block;
  width: 100%;
  padding: 4px;
  border: 0;
  font-size: 0.8rem;
  text-align: left;
  color: #ccc;
  text-transform: capitalize;
  background: #232323;
`

const StyledButton = styled.button<{variant: string | undefined}>`
  cursor: pointer;
  font: 1rem/1.2 ${T.font.family};
  font-size: 1rem;
  border-radius: 4px;
  border: 0;
  padding: 0.5em 1.5em;
  text-transform: uppercase;
  transition: 0.5s all ease-out;

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          color: #fff;
          background: ${T.color.title};
        `;
      case "filter":
        return {StyledNaviButton}
      default:
        return css`
          color: ${T.color.text};
          background: ${T.color.btnBg};
        `;
    }
  }}

  &:hover {
    background: #999;
  }
`;

export default StyledButton;
