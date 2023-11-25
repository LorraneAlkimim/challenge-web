import { api } from '../lib/axios'
import { ISale } from '../typings/api';

type ISalesResponse = {
  count: number,
  next: number | null
  previous: number | null
  results: ISale[]
}

type PayloadSale = {
  date: string,
  seller: number,
  customer: string,
  products: {
    id: string,
    quantity: number
  }[]
}

export function getSales() {
  return api.get<ISalesResponse>('/sales/')
}

export function findSale(code: string) {
  return api.get<ISale>(`/sales/${code}/`)
}

export function createSale(sale: PayloadSale) {
  return api.post('/create_sale/', sale)
}

export function editSale(sale: PayloadSale, code: string) {
  return api.put(`/update_sale/${code}/`, sale)
}

export function deleteSale(code: number) {
  return api.delete(`/sales/${code}/`)
}