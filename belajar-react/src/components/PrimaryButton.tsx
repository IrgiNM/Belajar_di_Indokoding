import React from "react";

type PrimaryButtonProps = {
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button onClick={props.onClick} disabled={props.disabled} {...props}>
      {props.label}
    </button>
  );
}
