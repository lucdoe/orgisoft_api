import { Request, Response } from 'express'
import { Memberitemamount } from '../models/Inventory/Memberitemamount'

export const findInventoryitems = async (req: Request, res: Response) => {
	const allInventoryitems = await Memberitemamount.find({
		relations: [
			'member',
			'inventoryitem',
			'inventoryitem.inventorygroup',
			'inventoryitem.inventoryplace',
		],
	})
	res.status(200).json(allInventoryitems)
}
