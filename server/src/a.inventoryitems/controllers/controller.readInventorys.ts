import { Request, Response } from 'express'
import { Inventoryitems } from '../models/model.Inventoryitem'

export const readInventoryitems = async (request: Request, response: Response) => {
	const allInventoryitems = await Inventoryitems.find({
		relations: ['members', 'inventorygroups', 'inventoryplaces'],
	})
	response.status(200).json(allInventoryitems)
}

export const readInventoryitem = async (request: Request, response: Response) => {
	const itemsId = request.params.id
	const inventoryitem = await Inventoryitems.find({
		relations: ['members', 'inventorygroups', 'inventoryplaces'],
		where: {
			id: itemsId,
		},
	})
	response.status(200).json(inventoryitem)
}

export const readItemOwner = async (request: Request, response: Response) => {
	const itemsId = request.params.id
	const inventoryitem = await Inventoryitems.find({
		select: ['id'],
		relations: ['members'],
		where: {
			id: itemsId,
		},
	})
	response.status(200).json(inventoryitem)
}
