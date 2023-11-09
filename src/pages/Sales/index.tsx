import { Header } from '../../components/Header';
import { Link } from '../../components/Link';
import { TableRow } from './TableRow';

import styles from './styles.module.scss';

export function Sales() {

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
                <th>Data de Venda</th>
                <th>Valor Total</th>
                <th>Opções</th>
              </tr>
            </thead>

            <tbody>
              {Array.from({length: 4}).map((_, index) => (
                <TableRow
                  key={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}