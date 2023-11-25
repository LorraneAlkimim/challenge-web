import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { NewSaleComponent } from '../../components/NewSaleComponent';
import { ISale } from '../../typings/api';
import { createSale } from '../../services';

export function NewSale() {
  const [sale, setSale] = useState<ISale>({
    date: '',
    customer: {
      id: '',
      name: '',
    },
    invoice_code: 0,
    products: [],
    quantity_of_items: 0,
    seller: {
      name: '',
      seller_code: 0
    },
    total_commission: 0,
    total_value: 0
  })

  const navigate = useNavigate()

  async function handleToSave() {
    try {
      const data = {
        date: sale.date,
        seller: sale.seller.seller_code,
        customer: sale.customer.id,
        products: sale.products.map(product => ({
          id: product.id,
          quantity: product.quantity
        }))
      }

      await createSale(data)

      navigate('/', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <NewSaleComponent
      onSubmit={handleToSave}
      onCancel={() => navigate('/', {
        replace: true
      })}
      sale={sale}
      setSale={setSale}
    />
  )
}
