import styled from "styled-components";

const StyledMovieList = styled.ul`
  display: grid;
  grid-gap: 4vw 4.5vw;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  list-style: none;
  padding: 0;
`

export const StyledMovieListItem = styled.li`
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

  & > li {
    display: flex;
    align-items: flex-start;
    padding: 8px 0 0;
    font-size: 0.7rem;
    letter-spacing: 0;
  }

  h2 {
    margin: 0 auto 0 0;
    padding: 1px 0 0;
    font-size: 0.9rem;
    color: rgb(255 255 255 / 0.7);
  }

  span {
    min-width: 50px;
    margin-left: 8px;
    padding: 4px 8px;
    color: rgb(250 250 250 / 0.7);
    text-align: center;
    border: solid 1px rgb(151 151 151 / 0.5);
    border-radius: 4px;
  }

  i {
    color: rgb(250 250 250 / 0.5);
    font-style: normal;
  }
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
    background-color: rgb(42 32 45 / 1);
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 0.2);
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

export default StyledMovieList;
