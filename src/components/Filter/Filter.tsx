import StyledFilter, { StyledFilterItem } from "./StyledFilter";
import * as I from "./Filter.type";

const Filter = ({ filtersList, currentActive, onGenreClick }: I.IFilter) => {
  const naviFilter = filtersList.map((item: string) => {
    return (
      <StyledFilterItem
        key={item}
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
