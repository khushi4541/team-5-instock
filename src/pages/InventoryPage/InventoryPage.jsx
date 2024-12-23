import { useState } from "react";
import InventorysList from "../../components/InventoryList/InventoryList";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import axios from "axios";

export default function InventoryPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to open the delete modal
  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // Function to close the delete modal
  const handleCloseModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  // Function to confirm delete and refresh the inventory
  const handleConfirmDelete = async () => {
    if (selectedItem) {
      try {
        await axios.delete(`http://localhost:3030/inventories/${selectedItem.id}`);
        setShowModal(false);
        setSelectedItem(null);
        // Add logic to refresh inventory list, e.g., fetchInventory() if necessary.
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <InventorysList handleDeleteClick={handleDeleteClick} />
      {selectedItem && (
        <DeleteModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleConfirmDelete={handleConfirmDelete}
          heading={`Delete ${selectedItem.item_name}?`}
          message={`Please confirm that you'd like to delete ${selectedItem.item_name} from the inventory. This action cannot be undone.`}
        />
      )}
    </>
  );
}
