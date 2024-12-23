import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehousesDetailsPage from "./pages/WarehousesDetailsPage/WarehousesDetailsPage";
import WarehousesEditPage from "./pages/WarehousesEditPage/WarehousesEditPage";
import WarehousesAddPage from "./pages/WarehousesAddPage/WarehousesAddPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import InventoryEditPage from "./pages/InventoryEditPage/InventoryEditPage";
import InventoryAddPage from "./pages/InventoryAddPage/InventoryAddPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useState } from "react";
import { baseURL } from "./utils/api";
import axios from "axios";

function App() {
  const [warehousesData, setWarehousesData] = useState([]);

  const fetchWarehouses = async () => {
    const url = `${baseURL}/warehouses/`;
    try {
      const response = await axios.get(url);
      setWarehousesData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Redirect from "/" to "/warehouses" */}
        <Route path="/" element={<Navigate to="/warehouses" replace />} />
        <Route path="/warehouses" element={<WarehousesPage warehousesData={warehousesData} fetchWarehouses={fetchWarehouses} />} />
        <Route path="/warehouses/:id" element={<WarehousesDetailsPage />} />
        <Route path="/warehouses/:id/edit" element={<WarehousesEditPage />} />
        <Route path="/warehouses/add" element={<WarehousesAddPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventories/:id" element={<InventoryDetailsPage />} />
        <Route path="/inventory/:id/edit" element={<InventoryEditPage warehousesData={warehousesData} fetchWarehouses={fetchWarehouses}/>} />
        <Route path="/inventory/add" element={<InventoryAddPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
