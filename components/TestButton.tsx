import classNames from "classnames";
import styles from "./TestButton.module.scss";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@styles/global.scss";

type ButtonProps = {
  size: Size;
  state: State;
  hierarchy: Hierarchy;
  icon: IconState;
  children: React.ReactNode;
};

export enum Hierarchy {
  Primary = "primary",
  Secondary = "secondary",
  Grey = "grey",
  Empty = "empty",
  EmptyGrey = "empty-grey",
  Error = "error",
}
export enum IconState {
  None = "none",
  Leading = "leading",
  Trailing = "trailing",
  Only = "only",
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

export function TestButton({
  children,
  size,
  hierarchy,
  state,
  icon,
}: ButtonProps) {
  if (icon === IconState.None) {
    return (
      <button
        data-test-id={"testid"}
        title="TestButtonTitle"
        className={classNames(
          styles.container,
          styles[icon],
          styles[size],
          styles[hierarchy],
          styles[state],
        )}
      >
        {children}
      </button>
    );
  } else if (icon === IconState.Leading) {
    return (
      <button
        data-test-id={"testid"}
        title="TestButtonTitle"
        className={classNames(styles.container, styles[icon])}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clip-path="url(#clip0_10583_6)">
            <path
              d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6023 1.66666 9.99996 1.66666C5.39759 1.66666 1.66663 5.39762 1.66663 9.99999C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z"
              stroke="white"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_10583_6">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {children}
      </button>
    );
  } else if (icon === IconState.Trailing) {
    return (
      <button
        data-test-id={"testid"}
        title="TestButtonTitle"
        className={classNames(styles.container, styles[icon])}
      >
        <div className={classNames(styles.trailing)}>
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_10583_6)">
              <path
                d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6023 1.66666 9.99996 1.66666C5.39759 1.66666 1.66663 5.39762 1.66663 9.99999C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z"
                stroke="white"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_10583_6">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>
    );
  } else {
    //only state
    return (
      <button
        data-test-id={"testid"}
        title="TestButtonTitle"
        className={classNames(styles.container, styles[icon])}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clip-path="url(#clip0_10583_6)">
            <path
              d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6023 1.66666 9.99996 1.66666C5.39759 1.66666 1.66663 5.39762 1.66663 9.99999C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z"
              stroke="white"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_10583_6">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    );
  }
}
