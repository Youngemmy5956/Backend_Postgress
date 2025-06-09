import { Request, Response } from 'express';

export class IndexController {
    public async getItems(req: Request, res: Response): Promise<void> {
        // Logic to retrieve items from the database
        res.status(200).json({ message: 'Items retrieved successfully' });
    }

    public async createItem(req: Request, res: Response): Promise<void> {
        // Logic to create a new item in the database
        res.status(201).json({ message: 'Item created successfully' });
    }
}