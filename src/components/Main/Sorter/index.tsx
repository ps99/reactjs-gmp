import Button from "../../Button";
import StyledSorter, {
  StyledSummary,
  StyledList,
  StyledListItem,
} from "./StyledSorter";

const Sorter = ({ sortList, currentActive, onSorterClick }: any) => {
  const naviSorter = sortList.map((item: string, i: number) => {
    return (
      <StyledListItem key={i}>
        <Button
          value={item}
          handler={onSorterClick}
          classesList={item === currentActive ? ["active"] : undefined}
        />
      </StyledListItem>
    );
  });

  return (
    <StyledSorter>
      <StyledSummary>
        <span>Sort by</span>
        {currentActive}
        <i></i>
      </StyledSummary>
      <StyledList>{naviSorter}</StyledList>
    </StyledSorter>
  );
};

export default Sorter;
