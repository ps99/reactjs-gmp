import Button from "../../Button";
import StyledFilter, { StyledFilterItem } from "./StyledFilter";

const Filter = ({ filtersList, currentActive, onGenreClick }: any) => {
  const naviFilter = filtersList.map((item: string, i: number) => {
    return (
      <StyledFilterItem
        key={i}
        isActive={item === currentActive}
        onPointerDown={onGenreClick}
        data-name={item}
      >
        {item}
      </StyledFilterItem>
    );
  });

  return <StyledFilter>{naviFilter}</StyledFilter>;
};

export default Filter;
