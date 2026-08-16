import type { GeneralStatus } from "./status";

export type User = {
  id: string | number;
  avatar: string;
  name: string;
  email: string;
  role: string;
  status: GeneralStatus;
};
