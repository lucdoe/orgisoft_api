import { Request, Response } from 'express'
import { Inventoryitems } from '../models/model.Inventoryitem'

export const allInventoryitems = async (request: Request, response: Response) => {
	const allInventoryitems = await Inventoryitems.find({
		relations: ['members', 'inventorygroups', 'inventoryplaces'],
	})
	response.status(200).json({ message: allInventoryitems })
}

export const oneInventoryitem = async (request: Request, response: Response) => {
	const itemsId = request.params.id
	const inventoryitem = await Inventoryitems.find({
		relations: ['members', 'inventorygroups', 'inventoryplaces'],
		where: {
			id: itemsId,
		},
	})
	response.status(200).json(inventoryitem)
}

export const itemMember = async (request: Request, response: Response) => {
	const itemsId = request.params.id
	const inventoryitem = await Inventoryitems.find({
		select: ['id'],
		relations: ['members'],
		where: {
			id: itemsId,
		},
	})
	response.status(200).json({ message: inventoryitem })
}
