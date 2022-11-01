import styled from "styled-components";
import StyledMain from "../StyledMain";

const StyledSorter = styled.details`
  position: relative;
  min-width: 220px;
  padding: 24px 25px 0 0;
  font-size: 16px;
  color: #fff;
`;

export const StyledSummary = styled.summary`
  font-size: 0.8rem;
  line-height: 1.25;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;

  span {
    display: inline-block;
    width: 100px;
    opacity: 0.6;
  }

  i {
    position: absolute;
    width: 12px;
    height: 7px;
    right: 0;
    margin-top: 4px;
    background: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.17339 0C0.319169 0 -0.141788 1.00184 0.413939 1.65057L4.23746 6.11398C4.63642 6.57971 5.35674 6.57992 5.75597 6.11442L9.58401 1.65101C10.1403 1.0024 9.67943 0 8.82494 0H1.17339Z' fill='%23F65261'/%3E%3C/svg%3E") no-repeat scroll 0 0;

  }

  ${StyledSorter}[open] &::before {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    cursor: default;
  }

  &::marker,
  &::-webkit-details-marker {
    display: none;
    list-style: none;
    visibility: hidden;
    content: '';
  }

  ${StyledMain}[data-sort='release'] &::after {
    content: ' Date';
  }
`

export const StyledList = styled.ul`
  position: absolute;
  z-index: 2;
  width: 100%;
  padding-left: 96px;
  list-style: none;
`

export const StyledListItem = styled.li`

`

export default StyledSorter;
