import classNames from "classnames";
import styles from "./TestButton.module.scss";

type ButtonProps = {
  size: Size;
  state: State;
  hierarchy: Hierarchy;
  // icon:IconState,
  children: React.ReactNode;
  // color:ColorState,
};

export enum ColorState {
  white,
  none,
}

export enum Hierarchy {
  Primary = "primary",
  Secondary = "secondary",
  Grey = "grey",
  Empty = "empty",
  EmptyGrey = "empty-grey",
  Error = "error",
}
export enum IconState {
  Leading = "leading",
  Trailing = "trailing",
  Only = "only",
  False = "false",
}
export enum Size {
  sm = "sm",
  md = "md",
  lg = "lg",
  xlg = "xlg",
}

export enum State {
  default = "default",
  hover = "hover",
  focused = "focused",
  disabled = "disabled",
}

export function TestButton({ children, size, hierarchy, state }: ButtonProps) {
  return (
    <button
      data-test-id={"testid"}
      title="TestButtonTitle"
      className={classNames(
        styles.container,
        styles[size],
        styles[hierarchy],
        styles[state],
      )}
    >
      {children}
    </button>
  );
}
