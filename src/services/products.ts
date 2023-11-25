import { api } from "../lib/axios";
import { IProduct } from "../typings/api";

type IProductResponse = {
  results: IProduct[]
}

export function getProducts() {
  return api.get<IProductResponse>('/products/')
}