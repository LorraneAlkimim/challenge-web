import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Link } from '../../components/Link';
import { TableRow } from './TableRow';

import { ISale } from '../../typings/api';
import { api } from '../../lib/axios';
import styles from './styles.module.scss';

type ISalesResponse = {
  count: number,
  next: number | null
  previous: number | null
  results: ISale[]
}

export function Sales() {
  const [sales, setSales] = useState<ISale[]>([])

  useEffect(() => {
    async function handleToFetchSales() {
      try {
        const { data } = await api.get<ISalesResponse>('/sales/')
    
        if (data.results?.length) {
          setSales(data.results)
        }
      } catch (error) {
        console.error(error)
      }
    }

    handleToFetchSales()
  }, [])

  async function handleToDeleteSale(code: number) {
    try {
      await api.delete(`/sales/${code}/`)

      setSales(prevState => prevState.filter(sale => sale.invoice_code !== code))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Header title='Vendas' />

      <main className={styles.container}>
        <div className={styles['title-wrapper']}>
          <h2 className={styles.title}>Vendas Realizadas</h2>

          <Link to="/new-sale">Inserir nova Venda</Link>
        </div>

        <div className={styles['table-wrapper']}>
          <table>
            <thead>
              <tr>
                <th>Nota Fiscal</th>
                <th>Cliente</th>
                <th>Vendedor</th>
                <th>Data da Venda</th>
                <th>Valor Total</th>
                <th>Opções</th>
              </tr>
            </thead>

            <tbody>
              {sales.map((sale) => (
                <TableRow
                  key={sale.invoice_code}
                  sale={sale}
                  onDelete={() => handleToDeleteSale(sale.invoice_code)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
