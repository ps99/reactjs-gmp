import StyledStatusBar from "./StyledStatusBar";
import { IStatusBar } from "./StatusBar.type";

const StatusBar = ({ quantity }: IStatusBar) => {
  return (
    <StyledStatusBar>
      {quantity} movie{quantity !== 1 && "s"} found
    </StyledStatusBar>
  );
};

export default StatusBar;
