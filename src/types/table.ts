import type { ReactNode } from "react";

export type Columns<T> = {
  key: Extract<keyof T, string>;
  label: string;
  render?: (value: string, item?: T) => ReactNode;
}[];

export type Item<T> = T;
export type Items<T> = Array<T>;
