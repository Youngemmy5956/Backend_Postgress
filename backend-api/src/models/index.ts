export class ItemModel {
    private db: any; // Replace 'any' with the actual type of your database connection

    constructor(db: any) {
        this.db = db;
    }

    async findAll(): Promise<any[]> {
        const result = await this.db.query('SELECT * FROM items');
        return result.rows;
    }

    async create(item: any): Promise<any> {
        const result = await this.db.query('INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *', [item.name, item.description]);
        return result.rows[0];
    }
}