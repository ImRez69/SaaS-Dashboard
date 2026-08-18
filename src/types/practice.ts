import type { ReactElement } from "react";
import type { DifficultyLevel } from "./status";

export interface Practice {
  id: string | number;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  jsxElement: ReactElement;
  jsxString: string;
}

export type Practices = Array<Practice>;
