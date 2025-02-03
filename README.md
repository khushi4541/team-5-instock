# InStock - Warehouse and Inventory Management

**InStock** is a fully responsive web application that allows users to manage warehouses and their inventories with full CRUD functionality. Developed as part of a group project with two other developers, the app provides an easy-to-use interface for managing multiple warehouses, their locations, and their inventory statuses. The inventory for each warehouse is displayed with an in-stock status, allowing users to quickly see what items are available.

## Features

- **Warehouse Management**: Add, edit, and delete warehouse entries, each with specific details like name, location, and inventory.
- **Inventory Management**: Manage inventory within each warehouse, with the ability to add, edit, and delete inventory items.
- **Stock Status**: View whether inventory items are in stock or not.
- **Responsive Design**: The website is fully responsive, ensuring a great user experience across different devices.
- **CRUD Functionality**: Both warehouses and inventories support full Create, Read, Update, and Delete (CRUD) operations.
- **User-Friendly Interface**: Simple and intuitive user interface built with React and JavaScript.

## Technologies Used

- **Frontend**:
  - React: For building dynamic and responsive UI components.
  - JavaScript: For handling frontend logic and state management.
- **Backend**:
  - Node.js: A JavaScript runtime environment used for building the server-side logic.
  - Express: A Node.js framework used to manage routes and handle API requests.
  - MySQL: For managing the relational database that stores warehouse and inventory data.
- **Tools**:
  - Jira: Used to manage tasks and sprints, following agile methodologies to ensure timely delivery and organized development.

## How It Works

1. **Warehouse Management**: Users can add new warehouses with location details, or edit and delete existing warehouses. Each warehouse is linked to an inventory list.
2. **Inventory Management**: For each warehouse, users can add inventory items, edit them, or remove them. The status of each inventory item (in stock or out of stock) is displayed.
3. **Stock Status**: Inventory items are marked as either "in stock" or "out of stock," providing real-time updates to users.
4. **CRUD Operations**: The system supports all CRUD operations for both warehouses and inventories. Data is stored in a MySQL database, ensuring scalability.

## Future Implementations

**User Authentication:** Implement user login and roles to allow for different access levels (e.g., admin, viewer).
**Advanced Search & Filtering:** Add search and filtering functionality to easily locate warehouses and inventory items.
**Inventory Analytics:** Provide insights and reports on inventory levels and trends.

