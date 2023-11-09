import { Route, Routes } from "react-router-dom"
import { Sales } from "./pages/Sales"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Sales />} />
    </Routes>
  )
}

export default App
