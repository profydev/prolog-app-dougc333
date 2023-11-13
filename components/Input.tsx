import React from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

export enum Size {
  sm = "sm",
  md = "md",
  lg = "lg",
  xlg = "xlg",
}
export enum State {
  empty = "empty",
  filled = "filled",
  focused = "focused",
  disabled = "disabled",
}
function Input() {
  return <div className={classNames(styles.container)}>Input</div>;
}

export default Input;
