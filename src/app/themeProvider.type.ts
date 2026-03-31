import { type ReactNode } from "react";

export type Theme = "light" | "dark";

export type ThemeProviderProps = {
  children: ReactNode;
};
