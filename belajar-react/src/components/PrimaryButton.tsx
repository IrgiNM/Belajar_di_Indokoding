import React from "react";

type PrimaryButtonProps = {
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: string;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button className={`${props.style}`} onClick={props.onClick} disabled={props.disabled} >
      {props.label}
    </button>
  );
}