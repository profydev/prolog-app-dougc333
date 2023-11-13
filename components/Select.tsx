import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./Select.module.scss";

type SelectProps = {
  state: State;
};

export enum State {
  empty = "empty",
  filled = "filled",
  focused = "focused",
  disabled = "disabled",
  open = "open",
}

export function Select({ state }: SelectProps) {
  const [placeholder, setPlaceholder] = useState("");
  const optionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state === "empty") {
      setPlaceholder("Select team member");
    } else if (state === "filled") {
      setPlaceholder("Olivia Rhye");
    } else if (state === "focused") {
      setPlaceholder("Olivia Rhye");
    } else if (state === "disabled") {
      setPlaceholder("Olivia Rhye");
    } else if (state === "open") {
      setPlaceholder("TBD add list");
    }
  }, [state]);

  return (
    <div>
      <label
        className={classNames(styles.container, styles.label)}
        htmlFor="label"
      >
        Team member
        <input
          ref={optionRef}
          placeholder={placeholder}
          title="a"
          className={classNames(
            styles.container,
            styles[state],
            styles.placeholder,
          )}
        />
        <label className={classNames(styles.hint)} htmlFor="hint">
          This is a hint text to help user
        </label>
      </label>
    </div>
  );
}
