type ISeller = {
  name: string;
  seller_code: number;
};

export type ISale = {
  invoice_code: number;
  quantity_of_items: number;
  total_commission: number;
  total_value: number;
  date: string;
  customer: {
    id: string;
    name: string;
  };
  seller: ISeller;
  products: {
    code: number;
    description: string;
    commission: number;
    commission_percentage: number;
    price: number;
    quantity: number;
    total_price: number;
  }[];
};

export type ICommission = {
  seller: ISeller;
  value: number;
  sales_quantity: number;
};
