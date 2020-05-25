import { Request, Response } from 'express'
import { Inventoryitem } from '../../models/Inventory/Inventoryitem'

export const deleteInventoryitemById = async (req: Request, res: Response) => {
	const itemId = req.params.id
	await Inventoryitem.delete(itemId)
	res.status(200).json(`Delete executed with id: ${itemId}`)
}
