import { Request, Response } from 'express'
import { Inventoryitems } from '../models/model.Inventoryitem'

export const allInventoryitems = async (request: Request, response: Response) => {
	const result = await Inventoryitems.find({
		relations: ['members', 'inventorygroups', 'inventoryplaces'],
	})
	response.status(200).json(result)
}

export const oneInventoryitem = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Inventoryitems.find({
		relations: ['members', 'inventorygroups', 'inventoryplaces'],
		where: {
			id,
		},
	})
	response.status(200).json(result)
}

export const itemMember = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Inventoryitems.find({
		select: ['id'],
		relations: ['members'],
		where: {
			id,
		},
	})
	response.status(200).json(result)
}
