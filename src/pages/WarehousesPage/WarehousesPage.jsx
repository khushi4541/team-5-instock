import { baseURL } from "../../utils/api";
import { useState, useEffect } from "react";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import axios from "axios";

function WarehousesPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
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

  useEffect(() => {
    fetchWarehouses();
  }, []);

  const handleDeleteClick = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setShowModal(true);
    console.log(selectedWarehouse);
  };

  const handleCloseModal = () => {
    setSelectedWarehouse(null);
    setShowModal(false);
    console.log(showModal);
  };

  const handleConfirmDelete = async () => {
    if (selectedWarehouse) {
      try {
        await axios.delete(`${baseURL}/warehouses/${selectedWarehouse.id}`);
        setShowModal(false);
        setSelectedWarehouse(null);
        fetchWarehouses();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section className="warehouses-page">
      <WarehousesList
        handleDeleteClick={handleDeleteClick}
        warehousesData={warehousesData}
      />
      {selectedWarehouse && (
        <DeleteModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleConfirmDelete={handleConfirmDelete}
          heading={`Delete ${selectedWarehouse.warehouse_name}  warehouse?`}
          message={`Please confirm that you’d like to delete the ${selectedWarehouse.warehouse_name} warehouse from the list of warehouses. You won’t be able to undo this action.`}
        />
      )}
    </section>
  );
}

export default WarehousesPage;
