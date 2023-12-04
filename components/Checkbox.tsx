import classNames from "classnames";
import styles from "./Checkbox.module.scss";
import React, { useState, useEffect } from "react";

type CheckboxProps = {
  size: Size;
  children: React.ReactNode;
  state: CheckStates;
  dynamicState: DynamicState;
};

export enum Size {
  sm = "sm",
  md = "md",
}

export enum CheckStates {
  checked = "checked",
  unchecked = "unchecked",
  indeterminate = "indeterminate",
}

export enum DynamicState {
  default = "default",
  hover = "hover",
  focused = "focused",
  disabled = "disabled",
}

export function Checkbox({
  children,
  size,
  state,
  dynamicState,
}: CheckboxProps) {
  const [checked, setChecked] = useState(false);
  const checkRef = React.useRef<HTMLInputElement>(null);

  const handler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target != null) {
      console.log(
        "event handler ev.target.checked:",
        (ev.target as HTMLInputElement).checked,
      );
      const stuff = (ev.target as HTMLInputElement).checked as boolean;
      const cool_stuff = (ev.target as HTMLInputElement)
        .checked satisfies boolean;
      console.log("funny typescript type system:", stuff);
      console.log("satisfies is a new feature:", cool_stuff);

      setChecked(!checked);
    }
  };
  //need a test program
  useEffect(() => {
    if (state === "checked") {
      setChecked(true);
      console.log("state checked");
    } else if (state === "unchecked") {
      console.log("state unchecked");
      setChecked(false);
    } else if (state === "indeterminate") {
      console.log("state indeterminate");
      if (checkRef && checkRef.current) {
        checkRef.current.indeterminate = true;
      }
    }
  }, [state]);

  return (
    <>
      <div className={classNames(styles.container)}>
        <label className={classNames(styles.label, styles[size])}>
          <input
            ref={checkRef}
            className={classNames(
              styles.input,
              styles[size],
              styles[dynamicState],
            )}
            type="checkbox"
            checked={checked}
            onChange={(ev) => handler(ev)}
          />
          <span className={classNames(styles.children)}>{children}</span>
        </label>
      </div>
    </>
  );
}
