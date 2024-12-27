import React from "react";
import { Button, ButtonProps } from "src/shared/Button";

type ButtonWithTextProps = ButtonProps & {
  label: string;
}

export const ButtonWithText: React.FC<ButtonWithTextProps> = ({label, classes, onClick}) => {
  return (
    <Button classes={classes} onClick={onClick}>
      {label}
    </Button>
  );
}