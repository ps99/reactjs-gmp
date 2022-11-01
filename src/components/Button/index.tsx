import StyledButton from "./StyledButton";

export interface IButton {
  value?: string | undefined;
  handler: any;
  classesList?: Array<string>;
  buttonText?: string | undefined;
}

const Button = ({
  value = undefined,
  handler,
  classesList = [],
  buttonText = value,
}: IButton) => {
  return (
    <StyledButton
      className={classesList.join(" ")}
      onPointerDown={handler}
      value={value}
    >
      {buttonText}
    </StyledButton>
  );
};

export default Button;
