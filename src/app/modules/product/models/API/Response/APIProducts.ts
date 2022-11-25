import { Product } from "../../product";
import { APIResponse } from "./APIResponse";

export interface APIProducts extends APIResponse {
  products: Product[];
}