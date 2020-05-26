import { Inventoryitem } from '../../models/Inventory/Inventoryitem'
import { Request, Response } from 'express'
import { getManager } from 'typeorm'

export const updateInventoryitemById = async (req: Request, res: Response) => {
	const idOfItemToUpdate = req.params.id
	const manager = getManager()
	const currentDate = new Date()
	const updateItem = {
		inventorygroup: req.body.inventorygroupId,
		member: req.body.memberId,
		inventoryplace: req.body.inventoryplaceId,
		inventoryitem: req.body.inventoryitem,
		descriptionText: req.body.description,
		updatedAt: currentDate,
	}
	await manager.update(Inventoryitem, idOfItemToUpdate, updateItem)
	res.status(200).json(`Succesfully updated item: ${updateItem.inventoryitem}`)
}
