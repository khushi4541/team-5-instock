import { baseURL } from "../../utils/api";
import { useState } from "react";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function WarehousesPage() {
  const [showModal, setShowModal] = useState(true);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  const handleDeleteClick = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedWarehouse(null);
    setShowModal(false);
  };

  const handleConfirmDelete = async () => {
    if (selectedWarehouse) {
      try {
        await axios.delete(`${baseURL}/warehouses/${selectedWarehouse.id}`);
        setShowModal(false);
        setSelectedWarehouse(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <WarehousesList handleDeleteClick={handleDeleteClick} />
        <DeleteModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleConfirmDelete={handleConfirmDelete}
          heading={`Delete  warehouse?`}
          message={`Please confirm that you’d like to delete the  warehouse from the list of warehouses. You won’t be able to undo this action.`}
        />
    </>
  );
}

export default WarehousesPage;
