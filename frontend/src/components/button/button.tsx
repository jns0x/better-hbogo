import React from "react";
import { StyledButton } from "./button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "solid" | "outline";
  color?: "default" | "orange" | "blue";
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.defaultProps = {
  variant: "solid",
  color: "default",
};

export default Button;
