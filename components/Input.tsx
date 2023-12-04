import classNames from "classnames";
import styles from "./Input.module.scss";
//import { normalizeRouteRegex } from "next/dist/lib/load-custom-routes";

type InputProps = {
  state: State;
  icon: Icon;
  label: Label;
  hint: Hint;
  error: Error;
  children: React.ReactNode;
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
  return (
    <label>
      Label
      <input
        className={classNames(
          styles.container,
          styles[state],
          styles[icon],
          styles[label],
          styles[hint],
          styles[error],
        )}
      />
      {children}
    </label>
  );
}

export default Input;
