import { Dispatch, MouseEvent, useEffect, useState } from 'react';

import { Header } from '../Header';
import { Input } from '../Input';
import { Link } from '../Link';

import { api } from '../../lib/axios';
import { formatPrice } from '../../utils/formatPrice';

import styles from './styles.module.scss';
import { ISale } from '../../typings/api';
import { DeleteButton } from '../DeleteButton';

type IProduct = {
  id: string
  code: number
  description: string
  commission_percentage: number
  price: number
}

type ISeller = {
  name: string
  seller_code: number
}

type ICustomer = {
  id: string
  name: string
}

type IProductResponse = {
  results: IProduct[]
}

type ISellersResponse = {
  results: ISeller[]
}

type ICustomersResponse = {
  results: ICustomer[]
}

type NewSaleProps = {
  onSubmit: () => void
  onCancel?: () => void
  isEdit?: boolean
  sale: ISale
  setSale: Dispatch<React.SetStateAction<ISale>>
  saleCode?: string
}

export function NewSaleComponent({
  isEdit = false,
  saleCode,
  onSubmit,
  onCancel,
  sale, setSale
}: NewSaleProps) {
  const [productInput, setProductInput] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);

  const [products, setProducts] = useState<IProduct[]>([])
  const [sellers, setSellers] = useState<ISeller[]>([])
  const [customers, setCustomers] = useState<ICustomer[]>([])

  const findProduct = () => products.find(product => `${product.code} - ${product.description}` === productInput)

  function handleToAddProduct(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    const product = findProduct()

    if (!product?.id) return

    const formattedProduct = {
      id: product.id,
      code: product.code,
      commission_percentage: product.commission_percentage,
      commission: 0,
      description: product.description,
      price: product.price,
      quantity: productQuantity,
      total_price: product.price * productQuantity
    }

    setSale(prevState => ({
      ...prevState,
      products: [
        ...prevState.products,
        formattedProduct
      ]
    }))

    setProductInput('')
    setProductQuantity(0)
  }

  function handleToRemoveProduct(productId: string) {
    setSale(prevState => ({
      ...prevState,
      products: prevState.products.filter(product => product.id !== productId)
    }))
  }

  function hasAValidProduct() {
    const product = findProduct()

    return !!product?.description
  }

  function dateParse(value: string) {
    if (!value) return value

    const date = new Date(value)

    const [year, month, day, hour, minute] = [
      date.getFullYear(),
      (date.getMonth() + 1).toString().padStart(2, '0'),
      date.getDate().toString().padStart(2, '0'),
      date.getHours().toString().padStart(2, '0'),
      date.getMinutes().toString().padStart(2, '0'),
    ]

    const formatted = `${year}-${month}-${day}T${hour}:${minute}`

    return formatted
  }

  function formatDate(value: string) {
    const formatted = new Date(value).toISOString()

    return formatted
  }

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await api.get<IProductResponse>('/products/')

      setProducts(data.results)
    }

    async function fetchSellers() {
      const { data } = await api.get<ISellersResponse>('/sellers/')
      
      setSellers(data.results)
    }

    async function fetchCustomers() {
      const { data } = await api.get<ICustomersResponse>('/customers/')

      setCustomers(data.results)
    }
    
    fetchProducts()
    fetchSellers()
    fetchCustomers()
  }, [])

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

            {products?.length ? (
              <datalist id='product-list'>
                {products.map(product => (
                  <option key={product.id} value={`${product.code} - ${product.description}`} />
                ))}
              </datalist>
            ) : null}

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
              disabled={productQuantity <= 0 || !hasAValidProduct()}
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
                {sale?.products?.map((product) => (
                  <tr key={product.id}>
                    <td>{product.code.toString().padStart(3, '0')} - {product.description}</td>
                    <td>{product.quantity}</td>
                    <td>{formatPrice(product.price)}</td>
                    <td>
                      <div>
                        <span>{formatPrice(product.total_price)}</span>

                        <DeleteButton
                          title='Remover Produto'
                          description='Deseja remover esta produto?'
                          onDelete={() => handleToRemoveProduct(product.id)}
                        />
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
                value={dateParse(sale.date)}
                onChange={event => setSale(prev => ({
                  ...prev,
                  date: formatDate(event.target.value)
                }))}
              />

              <Input
                id='seller'
                label='Escolha um vendador'
                asSelect
                value={sale.seller?.name}
                options={sellers.map(seller => seller.name)}
                placeholder='Selecione o nome'
                onChange={event => setSale(prev => ({
                  ...prev,
                  seller: (() => {
                    const customer = sellers.find(c => c.name === event.target.value)

                    return {
                      seller_code: customer?.seller_code,
                      name: customer?.name,
                    } as ISeller
                  })()
                }))}
              />

              <Input
                id='customer'
                label='Escolha um cliente'
                asSelect
                value={sale.customer?.name}
                options={customers.map(customer => customer.name)}
                placeholder='Selecione o nome'
                onChange={event => setSale(prev => ({
                  ...prev,
                  customer: (() => {
                    const customer = customers.find(c => c.name === event.target.value)

                    return {
                      id: customer?.id,
                      name: customer?.name,
                    } as ICustomer
                  })()
                }))}
              />
            </form>

            <div className={styles['price-wrapper']}>
              <span>Valor total da venda:</span>

              <strong>{formatPrice(sale?.total_value ?? 0)}</strong>
            </div>

            <div className={styles['actions-wrapper']}>
              {onCancel ? (
                <Link asButton onClick={onCancel}>Cancelar</Link>
              ) : null}

              <Link
                asButton
                onClick={onSubmit}
                disabled={!sale.seller?.name || !sale.customer?.name || !sale.date || !sale.products?.length}
              >Finalizar</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
