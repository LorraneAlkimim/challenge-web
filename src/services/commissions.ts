import { api } from "../lib/axios";
import { ICommission } from "../typings/api"

type ICommissionsResponse = {
  total: number
  commissions: ICommission[]
}

export function getCommissions(startDate: Date, endDate: Date) {
  return api.get<ICommissionsResponse>('/commissions/', {
    params: {
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
    }
  });
}