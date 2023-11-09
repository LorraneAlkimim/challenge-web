import { FormEvent, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Link } from '../../components/Link'

import styles from './styles.module.scss'

export function Commissions() {
  const [dateRange, setDateRange] = useState({
    start: '',
    end: '',
  })

  async function handleToSearchCommissions(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log('Typing...')
  }

  return (
    <>
      <Header title='Comissões' />

      <main className={styles.container}>
        <div className={styles['title-wrapper']}>
          <h2>Relatório de Comissões</h2>

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

        <div className={styles['table-wrapper']}>
          <table>
            <thead>
              <tr>
                <th>Cod.</th>
                <th>Vendedor</th>
                <th>Total de Vendas</th>
                <th>Total de Comissões</th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td>003</td>
                  <td>Antônio</td>
                  <td>5</td>
                  <td>R$ 30,98</td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td>Total de Comissões</td>
                <td></td>
                <td></td>
                <td>R$ 1.250,00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>
    </>
  )
}
