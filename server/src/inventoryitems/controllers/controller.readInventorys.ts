import { Request, Response } from 'express'
import { Inventoryitems } from '../models/model.Inventoryitem'

export const allInventoryitems = async (request: Request, response: Response) => {
	const skip = +request.query.skip
	const take = +request.query.take
	const { desc } = request.query
	const orderDirection = desc == '1' ? 'DESC' : 'ASC'
	const result = await Inventoryitems.find({
		relations: ['members', 'inventorygroups', 'inventoryplaces'],
		order: {
			inventoryitem: orderDirection,
		},
		skip: skip,
		take: take,
	})
	return response.status(200).json(result)
}

export const oneInventoryitem = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Inventoryitems.find({
		relations: ['members', 'inventorygroups', 'inventoryplaces'],
		where: {
			id,
		},
	})
	return response.status(200).json(result)
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
	return response.status(200).json(result)
}
