import React, { useState, useEffect } from "react";
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

//const arrayUsers<[string]> = ["Olivia Rhye","Phoenix Baker", "Olivia Rhye", "Lena Steiner","Demi Wilkinson","Candice Wu","Ntatli Craig","Drew Cano"]
//const singleUser = ["Olivia Rhye"]

export function Select({ state }: SelectProps) {
  const [optionValue, setOptionValue] = useState<string[]>([""]);

  useEffect(() => {
    console.log("useEffect staate:", state);
    if (state === "empty") {
      setOptionValue(["Select team member"]);
    } else if (state === "filled") {
      setOptionValue(["Olivia Rhye"]);
    } else if (state === "focused") {
      setOptionValue(["Olivia Rhye"]);
    } else if (state === "disabled") {
      setOptionValue(["Olivia Rhye"]);
    } else if (state === "open") {
      setOptionValue([
        "Olivia Rhye",
        "Phoenix Baker",
        "Olivia Rhye",
        "Lena Steiner",
        "Demi Wilkinson",
        "Candice Wu",
        "Ntatli Craig",
        "Drew Cano",
      ]);
    }
  }, [state]);

  return (
    <div className={classNames(styles.container)}>
      <span className={classNames(styles.container, styles.label)}>
        Team member
      </span>
      <select
        onChange={(e) => {
          console.log("e.target.value:", e.target.value);
        }}
        className={classNames(
          styles.container,
          styles.select,
          styles[state],
          styles.option,
        )}
      >
        {optionValue.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>

      <span className={classNames(styles.container, styles.hint)}>
        This is a hint text to help user
      </span>
    </div>
  );
}
