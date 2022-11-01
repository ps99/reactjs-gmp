import styled from "styled-components";

const StyledFilter = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledFilterItem = styled.li`
  position: relative;
  padding: 20px 0;

  &:not(:first-of-type) {
    margin-left: 30px;
  }
`

export default StyledFilter;
