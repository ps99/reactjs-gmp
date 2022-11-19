import {color} from '../../theme'
import styled from "styled-components";

const StyledFilter = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0 20px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledFilterItem = styled.li<{isActive: boolean}>`
  position: relative;
  padding: 20px 0;
  font-size: 0.8rem;
  cursor: pointer;
  color: ${color.naviLink};
  text-transform: uppercase;

  &::after {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    transition: all 0.5s ease;
    content: '';
    ${({isActive}) => (isActive ? `background: ${color.title}` : "")}
  }

  &:hover::after {
    background: ${color.title};
  }
`



export default StyledFilter;
