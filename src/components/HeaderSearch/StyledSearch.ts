import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 14px;
  padding: 150px 10vw 0;
  border: 0;

  @media (min-width: 1200px) {
    padding: 150px 120px 0;
  }
`

export const StyledTitle = styled.h3`
  width: 100%;
  margin: 0 0 38px;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
`

export const StyledInput = styled.input`
  font-family: var(--font-family);
  flex-grow: 3;
  font-size: 1rem;
  padding: 16px;
  border: 0;
  border-radius: 4px;
  color: rgb(255 255 255 / 0.3);
  mix-blend-mode: normal;
  background: rgb(50 50 50 / 0.7);
`

export default StyledSearch;
