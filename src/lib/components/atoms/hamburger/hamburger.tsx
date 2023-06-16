import type { Component } from "#/lib/utils/component";
import type { HamburgerProps } from "./hamburger.type";
import { clsx } from "clsx";
import { FiMenu, FiX } from "react-icons/fi";

export const Hamburger: Component<HamburgerProps> = ({ open, setOpen }) => {
  // Common styles :
  const styles = clsx(
    "w-10 h-10 text-white",
    "absolute right-0 top-0 bottom-0 my-auto",
    "transition-opacity duration-300",
    "cursor-pointer"
  );

  return (
    <button className="relative appearance-none" onClick={() => setOpen((state) => !state)} aria-label="hamburger">
      <FiX className={clsx(
        styles,
        {
          "opacity-100": open,
          "opacity-0": !open
        }
      )} />
      <FiMenu className={clsx(
        styles,
        {
          "opacity-0": open,
          "opacity-100": !open
        }
      )} />
    </button>
  );
};