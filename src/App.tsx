import { Route, Routes } from "react-router-dom"

import { Sales } from "./pages/Sales"
import { NewSale } from "./pages/NewSale"
import { EditSale } from "./pages/EditSale"
import { Commissions } from "./pages/Commissions"

function App() {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Sales />} />
        <Route path='new-sale' element={<NewSale />} />
        <Route path='edit-sale/:code' element={<EditSale />} />
      </Route>

      <Route path='/commissions' element={<Commissions />} />
    </Routes>
  )
}

export default App
