import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Inventoryitems } from '../../models/inventoryitems/model.Inventoryitem'
import { Inventorygroups } from '../../models/inventoryitems/model.Inventorygroup'
import { Inventoryplaces } from '../../models/inventoryitems/model.Inventoryplace'

export const createInventoryitem = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const newItem = {
		inventorygroups: request.body.inventorygroupsId,
		members: request.body.membersId,
		inventoryplaces: request.body.inventoryplacesId,
		inventoryitem: request.body.inventoryitem,
		descriptionText: request.body.description,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Inventoryitems, newItem)
	response.status(201).json(`Succesfully inserted item: ${newItem.inventoryitem}`)
}

export const createInventoryGroup = async (request: Request, response: Response) => {
	const manager = getManager()
	const inventorygroup = {
		inventorygroup: request.body.inventorygroup,
	}
	await manager.insert(Inventorygroups, inventorygroup)
	response.status(201).json(`Succesfully inserted Inventorygroup: ${inventorygroup.inventorygroup}`)
}

export const createInventoryPlace = async (request: Request, response: Response) => {
	const manager = getManager()
	const inventoryplace = {
		inventoryplace: request.body.inventoryplace,
	}
	await manager.insert(Inventoryplaces, inventoryplace)
	response.status(201).json(`Succesfully inserted Inventoryplace: ${inventoryplace.inventoryplace}`)
}
