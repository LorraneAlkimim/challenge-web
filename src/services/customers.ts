import { api } from "../lib/axios";
import { ICustomer } from "../typings/api";

type ICustomersResponse = {
  results: ICustomer[]
}

export function getCustomers() {
  return api.get<ICustomersResponse>('/customers/')
}