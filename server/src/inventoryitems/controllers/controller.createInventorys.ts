import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Inventoryitems } from '../models/model.Inventoryitem'
import { Inventorygroups } from '../models/model.Inventorygroup'
import { Inventoryplaces } from '../models/model.Inventoryplace'

export const newInventoryitem = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const result = {
		inventorygroups: request.body.group,
		members: request.body.member,
		inventoryplaces: request.body.place,
		inventoryitem: request.body.item,
		descriptionText: request.body.description,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Inventoryitems, result)
	return response.status(201).json({ message: `Succesfully inserted item: ${result.inventoryitem}` })
}

export const newGroup = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		inventorygroup: request.body.group,
	}
	await manager.insert(Inventorygroups, result)
	return response
		.status(201)
		.json({ message: `Succesfully inserted Inventorygroup: ${result.inventorygroup}` })
}

export const newPlace = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		inventoryplace: request.body.place,
	}
	await manager.insert(Inventoryplaces, result)
	return response
		.status(201)
		.json({ message: `Succesfully inserted Inventoryplace: ${result.inventoryplace}` })
}
