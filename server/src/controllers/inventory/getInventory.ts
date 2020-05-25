import { Request, Response } from 'express'
import { Inventoryitem } from '../../models/Inventory/Inventoryitem'

export const findInventoryitems = async (req: Request, res: Response) => {
	const allInventoryitems = await Inventoryitem.find({
		relations: ['member', 'inventorygroup', 'inventoryplace'],
		select: ['id'],
	})
	res.status(200).json(allInventoryitems)
}

export const findInventoryitemById = async (req: Request, res: Response) => {
	const itemId = req.params.id
	const inventoryitem = await Inventoryitem.find({
		relations: ['inventorygroup', 'inventoryplace'],
		where: {
			id: itemId,
		},
	})
	res.status(200).json(inventoryitem)
}

export const findInventoryitemByIdMember = async (
	req: Request,
	res: Response
) => {
	const itemId = req.params.id
	const inventoryitem = await Inventoryitem.find({
		select: ['id'],
		relations: ['member'],
		where: {
			id: itemId,
		},
	})
	res.status(200).json(inventoryitem)
}