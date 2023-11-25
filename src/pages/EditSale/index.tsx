import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { NewSaleComponent } from '../../components/NewSaleComponent';

import { ISale } from '../../typings/api';
import { findSale, editSale } from '../../services';

export function EditSale() {
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
  const { code } = useParams();

  useEffect(() => {
    async function handleToFetchSale() {
      if (!code) return

      const { data } = await findSale(code)

      setSale(data)
    }

    handleToFetchSale()
  }, [code])

  async function handleToEditSale() {
    try {
      const payload = {
        date: sale.date,
        seller: sale.seller.seller_code,
        customer: sale.customer.id,
        products: sale.products.map(product => ({
          id: product.id,
          quantity: product.quantity
        }))
      }

      if (!code) return

      await editSale(payload, code)

      navigate('/', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <NewSaleComponent
      isEdit
      onSubmit={handleToEditSale}
      onCancel={() => navigate('/', {
        replace: true
      })}
      sale={sale}
      setSale={setSale}
      saleCode={code}
    />
  )
}
