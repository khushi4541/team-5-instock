import { useEffect, useState } from "react";
import { baseURL } from "../../../utils/api";
import axios from "axios";
import './WarehousesList.scss'
import WarehousesListItem from "../WarehousesListItem/WarehousesListItem";

function WarehousesList() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      const url = `${baseURL}/warehouses/`;
      try {
        const response = await axios.get(url);
        setWarehouses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWarehouses();
  }, []);

  return (
    <section className="warehouses">
      <h1 className="warehouses__title">Warehouses</h1>
      <input type="text" className="warehouses__search" name="search" placeholder="Search..."/>
      <button className="warehouses__button">+ Add New Warehouse</button>
      <div className="warehouses__list">
        {warehouses.map((data) => (
          <WarehousesListItem key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
}

export default WarehousesList;
