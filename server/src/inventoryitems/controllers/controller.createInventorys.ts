import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Inventoryitems } from '../models/model.Inventoryitem'
import { Inventorygroups } from '../models/model.Inventorygroup'
import { Inventoryplaces } from '../models/model.Inventoryplace'

export const newInventoryitem = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const newItem = {
		inventorygroups: request.body.group,
		members: request.body.member,
		inventoryplaces: request.body.place,
		inventoryitem: request.body.item,
		descriptionText: request.body.description,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Inventoryitems, newItem)
	response.status(201).json({ message: `Succesfully inserted item: ${newItem.inventoryitem}` })
}

export const newGroup = async (request: Request, response: Response) => {
	const manager = getManager()
	const inventorygroup = {
		inventorygroup: request.body.group,
	}
	await manager.insert(Inventorygroups, inventorygroup)
	response
		.status(201)
		.json({ message: `Succesfully inserted Inventorygroup: ${inventorygroup.inventorygroup}` })
}

export const newPlace = async (request: Request, response: Response) => {
	const manager = getManager()
	const inventoryplace = {
		inventoryplace: request.body.place,
	}
	await manager.insert(Inventoryplaces, inventoryplace)
	response
		.status(201)
		.json({ message: `Succesfully inserted Inventoryplace: ${inventoryplace.inventoryplace}` })
}
