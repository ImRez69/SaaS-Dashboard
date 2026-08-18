import type { StockStatus } from "./status";

export interface Product {
  id: string | number;
  name: string;
  price: number;
  category: string;
  stock: number;
  status: StockStatus;
  image: string;
}

export type Products = Array<Product>;
