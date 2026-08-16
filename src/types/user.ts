import type { GeneralStatus } from "./status";

export interface User {
  id: string | number;
  avatar: string;
  name: string;
  email: string;
  role: string;
  status: GeneralStatus;
}

export type Users = User[];
