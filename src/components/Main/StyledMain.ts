import styled from "styled-components";

const StyledMain = styled.main`
  position: relative;
  width: 100%;
  max-width: 1200px;
  flex: 1 0 auto;
  margin: 10px auto 0;
  padding: 0 5vw 20px;
  background: var(--color-bg-main);

  @media (min-width: 1200px)
    padding: 0 60px 20px;
  }

  // TODO: split to new component
  .movies-grid {
    display: grid;
    grid-gap: 4vw 4.5vw;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  .movie-item {
    max-width: 322px;

    &__image{
      position: relative;
      padding: 141.30% 0 0;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  
  }
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

export const StyledStatusBar = styled.div`
  padding: 24px 0;
  font-size: 20px;
  line-height: 1.2;
  color: #fff;
`

export default StyledMain;
