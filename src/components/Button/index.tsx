import StyledButton from "./StyledButton";

export interface IButton {
  value?: string;
  handler: any;
  classesList?: Array<string>;
  buttonText?: string | undefined;
  variant?: string;
}

const Button = ({
  value = undefined,
  handler,
  classesList = [],
  buttonText = value,
  variant = "secondary",
}: IButton) => {
  return (
    <StyledButton
      className={classesList.join(" ")}
      onPointerDown={handler}
      value={value}
      variant={variant}
    >
      {buttonText}
    </StyledButton>
  );
};

export default Button;
