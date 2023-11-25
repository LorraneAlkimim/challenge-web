import { api } from "../lib/axios";
import { ISeller } from "../typings/api";

type ISellersResponse = {
  results: ISeller[]
}

export function getSellers() {
  return api.get<ISellersResponse>('/sellers/')
}