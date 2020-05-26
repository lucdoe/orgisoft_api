import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Inventoryitem } from '../../models/Inventory/Inventoryitem'
import { Inventorygroup } from '../../models/Inventory/Inventorygroup'
import { Inventoryplace } from '../../models/Inventory/Inventoryplace'

export const createInventoryitem = async (req: Request, res: Response) => {
	const currentDate = new Date()
	const manager = getManager()
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

export const createInventoryGroup = async (req: Request, res: Response) => {
	const manager = getManager()
	const newInventoryGroup = {
		inventorygroup: req.body.inventorygroup,
	}
	await manager.insert(Inventorygroup, newInventoryGroup)
	res.status(201).json(
		`Succesfully inserted Inventorygroup: ${newInventoryGroup.inventorygroup}`
	)
}

export const createInventoryPlace = async (req: Request, res: Response) => {
	const manager = getManager()
	const newInventoryPlace = {
		inventoryplace: req.body.inventoryplace,
	}
	await manager.insert(Inventoryplace, newInventoryPlace)
	res.status(201).json(
		`Succesfully inserted Inventoryplace: ${newInventoryPlace.inventoryplace}`
	)
}
