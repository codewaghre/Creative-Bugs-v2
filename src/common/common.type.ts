import type { ReactNode, Dispatch, SetStateAction } from "react";

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export type NavbarProps = {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: Dispatch<SetStateAction<boolean>>;
};
