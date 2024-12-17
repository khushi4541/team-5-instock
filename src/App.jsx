import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from './pages/WarehousesPage/WarehousesPage';
import WarehousesDetailsPage from './pages/WarehousesDetailsPage/WarehousesDetailsPage';
import WarehousesEditPage from './pages/WarehousesEditPage/WarehousesEditPage';
import WarehousesAddPage from './pages/WarehousesAddPage/WarehousesAddPage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import InventoryDetailsPage from './pages/InventoryDetailsPage/InventoryDetailsPage';
import InventoryEditPage from './pages/InventoryEditPage/InventoryEditPage';
import InventoryAddPage from './pages/InventoryAddPage/InventoryAddPage';

function App() {

  return (
    <BrowserRouter>
      <>
      <Routes>
          <Route path="/warehouses" element={<WarehousesPage />} />
          {/* We may set up a redirect from / to /warehouses - tbd */}
          <Route path="/warehouses/:id" element={<WarehousesDetailsPage />}/>
          <Route path="/warehouses/:id/edit" element={<WarehousesEditPage />}/>
          <Route path="/warehouses/add" element={<WarehousesAddPage />}/>
          <Route path="/inventory" element={<InventoryPage />}/>
          <Route path="/inventory/:id" element={<InventoryDetailsPage />}/>
          <Route path="/inventory/:id/edit" element={<InventoryEditPage />}/>
          <Route path="/inventory/add" element={<InventoryAddPage />}/>
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App