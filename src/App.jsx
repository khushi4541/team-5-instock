import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <>
      <Routes>
          <Route path="/warehouses" element={<WarehousesPage />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App