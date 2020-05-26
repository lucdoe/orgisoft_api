import { Inventoryitem } from '../../models/Inventory/Inventoryitem'
import { Request, Response } from 'express'
import { getManager } from 'typeorm'

export const createInventoryitem = async (req: Request, res: Response) => {
	const currentDate = new Date()
	const manager = getManager() // you can also get it via getConnection().getRepository() or getManager().getRepository()
	const newItem = {
		inventorygroup: req.body.inventorygroupId,
		member: req.body.memberId,
		inventoryplace: req.body.inventoryplaceId,
		inventoryitem: req.body.inventoryitem,
		descriptionText: req.body.description,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Inventoryitem, newItem)
	res.status(201).json(`Succesfully inserted item: ${newItem.inventoryitem}`)
}

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
