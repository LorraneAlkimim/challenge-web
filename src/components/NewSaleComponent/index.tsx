import { MouseEvent, useState } from 'react';

import { Header } from '../Header';
import { Input } from '../Input';
import { Link } from '../Link';
import { DeleteButton } from '../DeleteButton';

import styles from './styles.module.scss';

type NewSaleProps = {
  onSubmit: () => void
  onCancel?: () => void
  isEdit?: boolean
  saleCode?: string
}

export function NewSaleComponent({
  isEdit = false,
  saleCode,
  onSubmit,
  onCancel,
}: NewSaleProps) {
  const [productInput, setProductInput] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);

  function handleToAddProduct(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    console.log('Add product')
  }

  return (
    <>
      <Header title={isEdit ? `Alterar Venda - Nº ${saleCode}` : 'Nova Venda'} />

      <main className={styles.container}>
        <div className={styles.left}>
          <h3>Produtos</h3>

          <form>
            <Input
              id='code-or-description'
              label='Buscar pelo código de barras ou descrição'
              placeholder='Digite o código ou nome do produto'
              list='product-list'
              value={productInput}
              onChange={event => setProductInput(event.target.value)}
            />

            <datalist id='product-list'>
              {Array.from({length: 3}).map((_, index) => (
                <option key={index} value={`Product 00${index}`} />
              ))}
            </datalist>

            <Input
              id='quantity'
              label='Quantidade de itens'
              placeholder='0'
              type='number'
              value={productQuantity}
              onChange={event => setProductQuantity(Number(event.target.value))}
            />

            <Link
              asButton
              disabled={productQuantity <= 0}
              onClick={handleToAddProduct}
            >Adicionar</Link>
          </form>

          <div className={styles['form-wrapper']}>
            <table>
              <thead>
                <tr>
                  <th>Produto/Serviço</th>
                  <th>Quantidade</th>
                  <th>Preço unitário</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <td>{index.toString().padStart(3, '0')} - Product {index}</td>
                    <td>3</td>
                    <td>R$ 4,50</td>
                    <td>
                      <div>
                        <span>R$ 20,25</span>

                        <DeleteButton onDelete={() => {}} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.right}>
          <h3>Dados da venda</h3>

          <div>
            <form>
              <Input
                id='date'
                label='Data e Hora da Venda'
                type='datetime-local'
              />

              <Input
                id='seller'
                label='Escolha um vendador'
                asSelect
                placeholder='Selecione o nome'
                options={[
                  'Vendedor 001',
                  'Vendedor 002',
                  'Vendedor 003',
                ]}
              />

              <Input
                id='customer'
                label='Escolha um cliente'
                asSelect
                placeholder='Selecione o nome'
                options={[
                  'Cliente 001',
                  'Cliente 002',
                  'Cliente 003',
                ]}
              />
            </form>

            <div className={styles['price-wrapper']}>
              <span>Valor total da venda:</span>

              <strong>R$ 20,50</strong>
            </div>

            <div className={styles['actions-wrapper']}>
              {onCancel ? (
                <Link asButton onClick={onCancel}>Cancelar</Link>
              ) : null}

              <Link
                asButton
                onClick={onSubmit}
              >Finalizar</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
