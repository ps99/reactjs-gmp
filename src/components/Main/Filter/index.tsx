import Button from "../../Button";
import StyledFilter, { StyledFilterItem } from "./StyledFilter";

const Filter = ({ filtersList, currentActive, onGenreClick }: any) => {
  const naviFilter = filtersList.map((item: string, i: number) => {
    return (
      <StyledFilterItem key={i}>
        <Button
          value={item}
          handler={onGenreClick}
          classesList={item === currentActive ? ["active"] : undefined}
        />
      </StyledFilterItem>
    );
  });

  return <StyledFilter>{naviFilter}</StyledFilter>;
};

export default Filter;
