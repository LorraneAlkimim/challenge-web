import { useState } from 'react'
import { FaEdit } from 'react-icons/fa'

import { DeleteButton } from '../../components/DeleteButton'

import styles from './styles.module.scss'

export function TableRow() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <tr>
        <td>003</td>
        <td>Customer Name</td>
        <td>Seller Name</td>
        <td>09/11/2022</td>
        <td>R$ 99,75</td>
        <td>
          <div className={styles.actions}>
            <button type='button' onClick={() => setIsOpened(prev => !prev)}>{isOpened ? 'Fechar' : 'Ver itens'}</button>

            <button onClick={() => {}} type='button'>
              <FaEdit size={16} />
            </button>

            <DeleteButton onDelete={() => {}} />
          </div>
        </td>
      </tr>

      {isOpened ? (
        <tr>
          <td colSpan={6}>
            <table className={styles['is-expanded']}>
              <thead>
                <tr>
                  <th>Produto/Serviço</th>
                  <th>Quantidade</th>
                  <th>Preço unitário</th>
                  <th>Total do Produto</th>
                  <th>% de Comissão</th>
                  <th>Comissão</th>
                </tr>
              </thead>

              <tbody>
                {Array.from({length: 4}).map((_, index) => (
                  <tr key={index}>
                    <td>002 - Product name</td>
                    <td>0</td>
                    <td>R$ 31,00</td>
                    <td>R$ 03,99</td>
                    <td>7%</td>
                    <td>R$ 3,67</td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td>Total da Venda</td>
                  <td>7</td>
                  <td></td>
                  <td>R$ 39,90</td>
                  <td></td>
                  <td>R$ 3,50</td>
                </tr>
              </tfoot>
            </table>
          </td>
        </tr>
      ) : null}
    </>
  )
}