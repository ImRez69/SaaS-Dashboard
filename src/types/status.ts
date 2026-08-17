export const GENERAL_STATUS = ["active", "inactive", "pending"] as const;
export const STOCK_STATUS = ["available", "low_stock", "out_of_stock"] as const;
export const DIFFICULTY_LEVEL = ["easy", "normal", "hard"] as const;

export type GeneralStatus = (typeof GENERAL_STATUS)[number];
export type StockStatus = (typeof STOCK_STATUS)[number];
export type DifficultyLevel = (typeof DIFFICULTY_LEVEL)[number];

export function isGeneralStatus(value: string): value is GeneralStatus {
  return GENERAL_STATUS.includes(value as GeneralStatus);
}
export function isStockStatus(value: string): value is StockStatus {
  return STOCK_STATUS.includes(value as StockStatus);
}
export function isDifficultyLevel(value: string): value is DifficultyLevel {
  return DIFFICULTY_LEVEL.includes(value as DifficultyLevel);
}
