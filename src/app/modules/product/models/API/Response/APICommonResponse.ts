import { Product } from "../../product";

export interface APICommonResponse {
  limit: number;
  total: number;
  skip: number;
  products?: Product[];
  // quotes?: Quote[];
}