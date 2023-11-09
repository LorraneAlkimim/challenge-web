import { Route, Routes } from "react-router-dom"

import { Sales } from "./pages/Sales"
import { NewSale } from "./pages/NewSale"

function App() {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Sales />} />
        <Route path='new-sale' element={<NewSale />} />
      </Route>
    </Routes>
  )
}

export default App
