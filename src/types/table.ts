import type { ReactNode } from "react";

export type Columns<T> = {
  key: Extract<keyof T, string>;
  label: string;
  render?: (value: string, item?: T) => ReactNode;
}[];
// User {
//   id: string | number;
//   avatar: string;
//   name: string;
//   email: string;
//   role: string;
//   status: GeneralStatus;
// }
export type Item<T> = T;
export type Items<T> = T[];
