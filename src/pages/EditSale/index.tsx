import { useNavigate, useParams } from 'react-router-dom';

import { NewSaleComponent } from '../../components/NewSaleComponent';

export function EditSale() {
  const navigate = useNavigate()
  const { code } = useParams();

  async function handleToEditSale() {
    console.log('Editando!')
  }

  return (
    <NewSaleComponent
      isEdit
      onSubmit={handleToEditSale}
      onCancel={() => navigate('/', {
        replace: true
      })}
      saleCode={code}
    />
  )
}
