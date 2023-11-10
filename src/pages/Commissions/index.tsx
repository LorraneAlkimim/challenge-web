import { FormEvent, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Link } from '../../components/Link'

import { api } from '../../lib/axios'

import { formatPrice } from '../../utils/formatPrice'
import { ICommission } from '../../typings/api'
import styles from './styles.module.scss'

type ICommissionsResponse = {
  total: number
  commissions: ICommission[]
}

export function Commissions() {
  const [commissions, setCommissions] = useState<ICommission[]>([])
  const [total, setTotal] = useState(0)

  const [dateRange, setDateRange] = useState({
    start: '',
    end: '',
  })

  async function handleToSearchCommissions(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!dateRange.start || !dateRange.end) return
    const startDate = new Date(dateRange.start)
    const endDate = new Date(dateRange.end)

    endDate.setDate(endDate.getDate() + 1)

    const params = {
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
    }

    const { data } = await api.get<ICommissionsResponse>('/commissions/', { params });

    setCommissions(data?.commissions)
    setTotal(data?.total)
  }

  return (
    <>
      <Header title='Comissões' />

      <main className={styles.container}>
        <div className={styles['title-wrapper']}>
          <h2 className={styles.title}>Relatório de Comissões</h2>

          <form onSubmit={handleToSearchCommissions}>
            <Input
              required
              id='start-date'
              type='date'
              value={dateRange.start}
              onChange={event => setDateRange(prevState => ({
                ...prevState,
                start: event.target.value
              }))}
            />

            <Input
              required
              id='end-date'
              type='date'
              value={dateRange.end}
              onChange={event => setDateRange(prevState => ({
                ...prevState,
                end: event.target.value
              }))}
            />

            <Link asButton type='submit' aria-label='Pesquisar'>
              <FaSearch size={20} />
            </Link>
          </form>
        </div>

        {commissions.length > 0 ? (
          <div className={styles['table-wrapper']}>
            <table>
              <thead>
                <tr>
                  <th>Cód.</th>
                  <th>Vendedor</th>
                  <th>Total de Vendas</th>
                  <th>Total de Comissões</th>
                </tr>
              </thead>

              <tbody>
                {commissions.map(commission => (
                  <tr key={commission.seller.seller_code}>
                    <td>{commission.seller.seller_code.toString().padStart(3, '0')}</td>
                    <td>{commission.seller.name}</td>
                    <td>{commission.sales_quantity}</td>
                    <td>{formatPrice(commission.value)}</td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td>Total de Comissões do Período</td>
                  <td></td>
                  <td></td>
                  <td>{formatPrice(total)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <div className={styles['not-found']}>
            <p>Para visualizar o relatório, selecione um período nos campos acima.</p>
          </div>
        )}

      </main>
    </>
  )
}
