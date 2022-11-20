import StyledSorter, {
  StyledSummary,
  StyledList,
  StyledListItem,
  StyledArrow,
} from "./StyledSorter";
import { ISorter } from "./Sorter.type";

const Sorter = ({ sortList, currentActive, onSorterClick }: ISorter) => {
  const naviSorter = sortList.map((item, i) => {
    return (
      <StyledListItem
        key={i}
        isActive={item === currentActive}
        onPointerDown={onSorterClick}
        data-name={item}
      >
        {item}
      </StyledListItem>
    );
  });

  return (
    <StyledSorter>
      <StyledSummary>
        <span>{currentActive}</span>
        <StyledArrow />
      </StyledSummary>
      <StyledList>{naviSorter}</StyledList>
    </StyledSorter>
  );
};

export default Sorter;
