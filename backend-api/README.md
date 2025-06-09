# Backend API Documentation

## Overview
This project is a backend API built with Express, PostgreSQL, TypeScript, and Node.js. It provides a RESTful interface for managing items in a database.

## Features
- CRUD operations for items
- PostgreSQL database integration
- TypeScript for type safety
- Environment variable configuration

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd backend-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
1. Create a `.env` file in the root directory and add your database connection details:
   ```
   DATABASE_URL=your_database_url
   ```

### Running the Application
To start the server, run:
```
npm start
```
The server will be running on `http://localhost:3000`.

### API Endpoints
- `GET /items` - Retrieve all items
- `POST /items` - Create a new item

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.