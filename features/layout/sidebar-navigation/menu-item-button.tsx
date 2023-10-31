import React from "react";
import { Button } from "@features/ui";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  id?: string;
  className?: string;
  text: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
};

export function MenuItemButton({
  id,
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
}: MenuItemProps) {
  if (isCollapsed && iconSrc === "/icons/arrow-left.svg") {
    return (
      <li id={"asdf"} className={classNames(styles.listItem, className)}>
        <Button data-test-id="EBMyWu8gPyLF_FVIrTt3g" id={"bbbbb"} className={styles.anchor} onClick={onClick}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id={id}
            className={styles.righticon}
            src={iconSrc}
            alt={`${text} icon`}
          />{" "}
          {!isCollapsed && text}{" "}
        </Button>
      </li>
    );
  }

  return (
    <li className={classNames(styles.listItem, className)}>
      <Button data-test-id="jxHy9zfhsh3_Sc_JO1sBv" className={styles.anchor} onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.icon} src={iconSrc} alt={`${text} icon`} />{" "}
        {!isCollapsed && text}{" "}
      </Button>
    </li>
  );
}
