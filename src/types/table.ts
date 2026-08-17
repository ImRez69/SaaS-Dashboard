import type { ReactNode } from "react";
import type { User } from "./user";

export type Columns = {
  key: keyof User;
  label: string;
  render?: (value: string, item?: string) => ReactNode;
}[];
