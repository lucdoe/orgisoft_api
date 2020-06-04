import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Inventoryitems } from '../models/model.Inventoryitem'
import { Inventorygroups } from '../models/model.Inventorygroup'
import { Inventoryplaces } from '../models/model.Inventoryplace'

export const updateInventoryitem = async (request: Request, response: Response) => {
	const itemId = request.params.id
	const manager = getManager()
	const currentDate = new Date()
	const updateItem = {
		inventorygroups: request.body.inventorygroupsId,
		members: request.body.membersId,
		inventoryplaces: request.body.inventoryplacesId,
		inventoryitem: request.body.inventoryitem,
		descriptionText: request.body.description,
		updatedAt: currentDate,
	}
	await manager.update(Inventoryitems, itemId, updateItem)
	response.status(200).json(`Succesfully updated item: ${updateItem.inventoryitem}`)
}

export const updateInventoryGroup = async (request: Request, response: Response) => {
	const groupsId = request.params.id
	const manager = getManager()
	const updateGroup = {
		inventorygroup: request.body.inventorygroup,
	}
	await manager.update(Inventorygroups, groupsId, updateGroup)
	response.status(200).json(`Succesfully updated Group: ${updateGroup.inventorygroup}`)
}

export const updateInventoryPlace = async (request: Request, response: Response) => {
	const placesId = request.params.id
	const manager = getManager()
	const updatePlace = {
		inventoryplace: request.body.inventoryplace,
	}
	await manager.update(Inventoryplaces, placesId, updatePlace)
	response.status(200).json(`Succesfully updated Group: ${updatePlace.inventoryplace}`)
}
