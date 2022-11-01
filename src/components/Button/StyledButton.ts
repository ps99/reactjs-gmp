import styled from "styled-components";
import StyledFilter from "../Main/Filter/StyledFilter";
import StyledSorter from "../Main/Sorter/StyledSorter"

const StyledButton = styled.button`
  cursor: pointer;
  font: 1rem/1.2 var(--font-family);
  font-size: 1rem;
  border-radius: 4px;
  border: 0;
  padding: 0.5em 1.5em;
  text-transform: uppercase;
  transition: 0.5s all ease-out;
  background: rgb(96 96 96 / 0.68);
  
  &.primary {
    flex-grow: 1;
    margin-left: 14px;
    border: 0;
    color: #fff;
    text-transform: uppercase;
    background: var(--color-text-title);
  }

  &:hover {
    color: #000;
    background: #ccc;
  }

  ${StyledFilter} &,
  ${StyledSorter} & {
    display: block;
    width: 100%;
    padding: 4px;
    border: 0;
    font-size: 0.8rem;
    text-align: left;
    color: #ccc;
    text-transform: capitalize;
    background: #232323;
  }

  ${StyledFilter} & {
    background: none;

    &::after {
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      transition: all 0.5s ease;
      content: '';
    }
  
    &.active::after,
    &:hover::after {
      background: var(--color-text-title);
    }
  }

  ${StyledSorter} &[value='release']::after {
    content: ' Date';
  }
`;

export default StyledButton;
