import StyledStatusBar from "./StyledStatusBar";
import * as I from "./StatusBar.type";

const StatusBar = ({ quantity }: I.IStatusBar) => {
  return (
    <StyledStatusBar>
      {quantity} movie{quantity !== 1 && "s"} found
    </StyledStatusBar>
  );
};

export default StatusBar;
