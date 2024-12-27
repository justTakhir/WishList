import classNames from "classnames";
import React, { ReactEventHandler } from "react";

export type ButtonProps = {
  classes: string | string[];
  children: React.ReactNode;
  onClick: ReactEventHandler;
}

export const Button: React.FC<ButtonProps> = ({classes, children, onClick}) => {
  return (
    <div onClick={onClick} className={classNames(classes)}>
      {children}
    </div>
  )
}