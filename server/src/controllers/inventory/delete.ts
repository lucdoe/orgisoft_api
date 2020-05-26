import { Request, Response } from 'express'
import { Inventoryitem } from '../../models/Inventory/Inventoryitem'
import { Inventorygroup } from '../../models/Inventory/Inventorygroup'
import { Inventoryplace } from '../../models/Inventory/Inventoryplace'

export const deleteInventoryitem = async (req: Request, res: Response) => {
	const itemId = req.params.id
	await Inventoryitem.delete(itemId)
	res.status(200).json(`Delete executed with id: ${itemId}`)
}

export const deleteInventorygroup = async (req: Request, res: Response) => {
	const groupId = req.params.id
	await Inventorygroup.delete(groupId)
	res.status(200).json(`Deleted Group with id: ${groupId}`)
}

export const deleteInventoryplace = async (req: Request, res: Response) => {
	const placeId = req.params.id
	await Inventoryplace.delete(placeId)
	res.status(200).json(`Deleted Place with id: ${placeId}`)
}
