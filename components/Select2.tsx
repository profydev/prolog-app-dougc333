import React from "react";
import classNames from "classnames";
import styles from "./Select2.module.scss";

type SelectProps = {
  state: State;
  icon?: string;
  label?: string;
  hint?: string;
  error?: string;
};

export enum State {
  empty,
  filled,
  focused,
  disabled,
  open,
}

export enum Icon {
  hasIcon = "hasIcon",
  noIcon = "noIcon",
}

export enum Label {
  hasLabel = "hasLabel",
  noLabel = "noLabel",
}

export enum Hint {
  hasHint = "hasHint",
  noHint = "noHint",
}

export enum Error {
  hasError = "hasError",
  noError = "noError",
}
export function Select2({ state }: SelectProps) {
  return (
    <div className={classNames(styles.container, styles[state])}>
      Label
      <div className={classNames(styles.input)}>
        <input type="text" />
        <button title="foo">
          <img src="./icons/chevron.svg"></img>
        </button>
      </div>
      Hint
    </div>
  );
}
