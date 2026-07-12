import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconSize?: number;
};

const ButtonBase = (props: Props) => {
  return <button {...props}>{props.children}</button>;
};

const ButtonPrimary = (props: Props) => {
  return (
    <ButtonBase {...props} className={`primary ${props.className}`}>
      {props.children}
    </ButtonBase>
  );
};

const ButtonPrimaryNoBg = (props: Props) => {
  return (
    <ButtonBase {...props} className={`primary_no_bg ${props.className}`}>
      {props.children}
    </ButtonBase>
  );
};
const ButtonPrimaryLight = (props: Props) => {
  return (
    <ButtonBase {...props} className={`primary-light ${props.className}`}>
      {props.children}
    </ButtonBase>
  );
};
const ButtonSecondary = (props: Props) => {
  return (
    <ButtonBase {...props} className={`secondary ${props.className}`}>
      {props.children}
    </ButtonBase>
  );
};

// create another button variants compound component

export {
  ButtonBase,
  ButtonPrimary,
  ButtonSecondary,
  ButtonPrimaryLight,
  ButtonPrimaryNoBg,
};
