import classNames from "classnames";
import styles from "./Input.module.scss";
import { useState, useEffect } from "react";

type InputProps = {
  state: State;
  icon: Icon;
  label: Label;
  hint: Hint;
  error: Error;
  children: [React.ReactNode, React.ReactNode, React.ReactNode];
};

export enum State {
  empty = "empty",
  filled = "filled",
  focused = "focused",
  disabled = "disabled",
}

export enum Icon {
  haveicon = "haveicon",
  noicon = "noicon",
}

export enum Label {
  havelabel = "havelabel",
  nolabel = "nolabel",
}

export enum Hint {
  havehint = "havehint",
  nohint = "nohint",
}

export enum Error {
  haveerror = "haveerror",
  noerror = "noerror",
}

export function Input({
  children,
  state,
  icon,
  label,
  hint,
  error,
}: InputProps) {
  const [placeholder, setPlaceholder] = useState("");
  useEffect(() => {
    if (icon === Icon.noicon) {
      setPlaceholder("olivia@untitledui.com");
    }
    if (icon === Icon.haveicon) {
      setPlaceholder("olivia@untitledui.com");
    }
  }, []);

  return (
    <div className={classNames(styles.container)}>
      <span className={classNames(styles.container, styles[label])}>
        {children[0]}
      </span>
      <input
        className={classNames(
          styles.container,
          styles[icon],
          styles[state],
          styles[label],
          styles[hint],
          styles[error],
        )}
        placeholder={placeholder}
      />
      <span
        className={classNames(
          styles.container,
          styles[hint],
          styles[icon],
          styles[error],
        )}
      >
        {error === Error.noerror ? children[1] : children[2]}
      </span>
    </div>
  );
}

export default Input;
