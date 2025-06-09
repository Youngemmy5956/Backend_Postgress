# PostgreSQL Learning Project

This project is a backend API built with **Express**, **PostgreSQL**, **TypeScript**, **Node.js**, and **Prisma**. It is designed as a learning tool to explore and document my progress with PostgreSQL.

## Purpose
The purpose of this project is to:
- Learn how to connect a Node.js application to a PostgreSQL database.
- Practice writing SQL queries and interacting with a database.
- Explore and use Prisma as an ORM for database interactions.
- Document my progress and experiments with PostgreSQL.

## Technologies Used
- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for creating APIs.
- **PostgreSQL**: Relational database management system.
- **TypeScript**: Strongly typed programming language for JavaScript.
- **dotenv**: For managing environment variables.
- **Prisma**: Modern ORM for type-safe database queries.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Supabase PostgreSQL credentials:
   ```env
   DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
   ```

4. Initialize Prisma:
   ```bash
   npx prisma init
   ```

5. Pull the database schema from Supabase:
   ```bash
   npx prisma db pull
   ```

6. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```

## Running the Project
1. Start the server in development mode:
   ```bash
   npm run dev
   ```
   This will use `nodemon` and `ts-node` to run the project directly without compiling.

2. Access the API at `http://localhost:3000`.

## Progress Documentation
I will be documenting my progress with PostgreSQL and Prisma in this project, including:
- Writing SQL queries.
- Managing database schemas.
- Performing CRUD operations using Prisma.
- Exploring advanced Prisma features like migrations and relations.

## License
This project is for personal learning purposes and is not intended for production use.
