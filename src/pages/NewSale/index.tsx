
import { useNavigate } from 'react-router-dom';

import { NewSaleComponent } from '../../components/NewSaleComponent';

export function NewSale() {
  const navigate = useNavigate()

  function handleToSave() {
    console.log('Salvando!')
  }

  return (
    <NewSaleComponent
      onSubmit={handleToSave}
      onCancel={() => navigate('/', {
        replace: true
      })}
    />
  )
}
