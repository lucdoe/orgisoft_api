import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Inventoryitem } from '../../models/Inventory/Inventoryitem'
import { Inventorygroup } from '../../models/Inventory/Inventorygroup'
import { Inventoryplace } from '../../models/Inventory/Inventoryplace'

export const oneInventoryitem = async (req: Request, res: Response) => {
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

export const oneInventoryGroup = async (req: Request, res: Response) => {
	const idOfGroupToUpdate = req.params.id
	const manager = getManager()
	const updateGroup = {
		inventorygroup: req.body.inventorygroup,
	}
	await manager.update(Inventorygroup, idOfGroupToUpdate, updateGroup)
	res.status(200).json(`Succesfully updated Group: ${updateGroup.inventorygroup}`)
}

export const oneInventoryPlace = async (req: Request, res: Response) => {
	const idOfGroupToUpdate = req.params.id
	const manager = getManager()
	const updatePlace = {
		inventoryplace: req.body.inventoryplace,
	}
	await manager.update(Inventoryplace, idOfGroupToUpdate, updatePlace)
	res.status(200).json(`Succesfully updated Group: ${updatePlace.inventoryplace}`)
}
