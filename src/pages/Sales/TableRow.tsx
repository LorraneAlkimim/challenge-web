import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'

import { DeleteButton } from '../../components/DeleteButton'

import { ISale } from '../../typings/api'
import styles from './styles.module.scss'

type TableRowProps = {
  sale: ISale
  onDelete: () => void
}

export function TableRow({ sale, onDelete }: TableRowProps) {
  const [isOpened, setIsOpened] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <tr key={sale.invoice_code}>
        <td>{sale.invoice_code.toString().padStart(8, '0')}</td>
        <td>{sale.customer.name}</td>
        <td>{sale.seller.name}</td>
        <td>{sale.date}</td>
        <td>{sale.total_value}</td>
        <td>
          <div className={styles.actions}>
            <button type='button' onClick={() => setIsOpened(prev => !prev)}>{isOpened ? 'Fechar' : 'Ver itens'}</button>

            <button onClick={() => navigate(`edit-sale/${sale.invoice_code}`)} type='button'>
              <FaEdit size={16} />
            </button>

            <DeleteButton onDelete={onDelete} />
          </div>
        </td>
      </tr>

      {isOpened ? (
        <tr>
          <td colSpan={6}>
            <table className={styles['is-expanded']}>
              <thead>
                <tr>
                  <th>Produtos/Serviço</th>
                  <th>Quantidade</th>
                  <th>Preço unitário</th>
                  <th>Total do Produto</th>
                  <th>% de Comissão</th>
                  <th>Comissão</th>
                </tr>
              </thead>

              <tbody>
                {sale.products.map(product => (
                  <tr key={product.code}>
                    <td>{product.code} - {product.description}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>{product.total_price}</td>
                    <td>{product.total_price}%</td>
                    <td>{product.commission}</td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td>Total da Venda</td>
                  <td>{sale.quantity_of_items}</td>
                  <td></td>
                  <td>{sale.total_value}</td>
                  <td></td>
                  <td>{sale.total_commission}</td>
                </tr>
              </tfoot>
            </table>
          </td>
        </tr>
      ) : null}
    </>
  )
}
