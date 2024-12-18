import WarehousesListItem from "../WarehousesListItem/WarehousesListItem";

function WarehousesList () {
    return (
        <section className="warehouses">
            <h1 className="warehouses__title">Warehouses</h1>
            <input type="text" className="warehouses__search" name="search"/>
            <button className="warehouses__button">+ Add New Warehouse</button>
            <div className="warehouses__list">
                <WarehousesListItem/>
            </div>
        </section>
    )
}

export default WarehousesList;