import {color, iColor} from "../../theme";
import styled from "styled-components";

const StyledMoviesList = styled.ul`
  display: grid;
  grid-gap: 4vw 4.5vw;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  list-style: none;
  padding: 0;
`

export const StyledMoviesListItem = styled.li`
  max-width: 322px;
`

export const StyledImageWrapper = styled.div`
  position: relative;
  padding: 141.30% 0 0;
  font-size: 0;

  & > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    background: rgb(255 255 255 / 0.1);
  }
`

export const StyledTextWrapper = styled.ul`
  padding: 11px 0 0;
  list-style: none;
`

export const StyledTextWrapperLine = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 8px 0 0;
  font-size: 0.7rem;
  letter-spacing: 0;
`

export const StyledTitle = styled.h2`
  margin: 0 auto 0 0;
  padding: 1px 0 0;
  font-size: 0.9rem;
  color: ${color.text};
`

export const StyledDate = styled.span`
  min-width: 50px;
  margin-left: 8px;
  padding: 4px 8px;
  color: ${color.text};
  text-align: center;
  border: solid 1px ${color.border};
  border-radius: 4px;
`

export const StyledGenre = styled.span`
  color: ${iColor.white(0.5)};
`

export const StyledContextMenu = styled.a`
  position: absolute;
  top: 15px;
  right: 17px;
  padding: 0;
  
  width: 36px;
  height: 36px;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${color.contextMenuBg};
    box-shadow: 0 0 4px 0 ${iColor.black(0.2)};
    border-radius: 18px;
    content: '';
  }

  &::after {
    position: absolute;
    left: 6px;
    top: 6px;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #fff 2px, transparent 2px);
    background-size: 100% 33.33%;
    content: '';
  }

`

export default StyledMoviesList;
