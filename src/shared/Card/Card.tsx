import classNames from "classnames";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  classes?: string | string[];
}

export const Card: React.FC<CardProps> = ({classes, children}) => {
  return (
    <div className={classNames(classes)}>
      {children}
    </div>
  )
}