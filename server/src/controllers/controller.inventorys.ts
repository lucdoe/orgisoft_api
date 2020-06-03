import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Inventoryitems } from '../models/inventory/model.Inventoryitem'
import { Inventorygroups } from '../models/inventory/model.Inventorygroup'
import { Inventoryplaces } from '../models/inventory/model.Inventoryplace'

/*
	/POST - create
	create new inventoryitem 
*/
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

/*
	/POST - create
	create new inventoryitem group
*/
export const createInventoryGroup = async (request: Request, response: Response) => {
	const manager = getManager()
	const inventorygroup = {
		inventorygroup: request.body.inventorygroup,
	}
	await manager.insert(Inventorygroups, inventorygroup)
	response.status(201).json(`Succesfully inserted Inventorygroup: ${inventorygroup.inventorygroup}`)
}

/*
	/POST - create
	create new inventoryitem place
*/
export const createInventoryPlace = async (request: Request, response: Response) => {
	const manager = getManager()
	const inventoryplace = {
		inventoryplace: request.body.inventoryplace,
	}
	await manager.insert(Inventoryplaces, inventoryplace)
	response.status(201).json(`Succesfully inserted Inventoryplace: ${inventoryplace.inventoryplace}`)
}

/*
	/GET - read
	read all inventoryitems
*/
export const readInventoryitems = async (request: Request, response: Response) => {
	const allInventoryitems = await Inventoryitems.find({
		relations: ['members', 'inventorygroups', 'inventoryplaces'],
	})
	response.status(200).json(allInventoryitems)
}

/*
	/GET - read
	read one inventoryitem
*/
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

/*
	/GET - read
	read inventoryitem owner
*/
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

/*
	/PUT - update
	update inventoryitem
*/
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

/*
	/PUT - update
	update inventoryitem group
*/
export const updateInventoryGroup = async (request: Request, response: Response) => {
	const groupsId = request.params.id
	const manager = getManager()
	const updateGroup = {
		inventorygroup: request.body.inventorygroup,
	}
	await manager.update(Inventorygroups, groupsId, updateGroup)
	response.status(200).json(`Succesfully updated Group: ${updateGroup.inventorygroup}`)
}

/*
	/PUT - update
	update inventoryitem place
*/
export const updateInventoryPlace = async (request: Request, response: Response) => {
	const placesId = request.params.id
	const manager = getManager()
	const updatePlace = {
		inventoryplace: request.body.inventoryplace,
	}
	await manager.update(Inventoryplaces, placesId, updatePlace)
	response.status(200).json(`Succesfully updated Group: ${updatePlace.inventoryplace}`)
}

/*
	/DELETE - delete
	delete inventoryitem 
*/
export const deleteInventoryitem = async (request: Request, response: Response) => {
	const itemsId = request.params.id
	await Inventoryitems.delete(itemsId)
	response.status(200).json(`Delete executed with id: ${itemsId}`)
}

/*
	/DELETE - delete
	delete inventoryitem group
*/
export const deleteInventorygroup = async (request: Request, response: Response) => {
	const groupsId = request.params.id
	await Inventorygroups.delete(groupsId)
	response.status(200).json(`Deleted Group with id: ${groupsId}`)
}

/*
	/DELETE - delete
	delete inventoryitem place
*/
export const deleteInventoryplace = async (request: Request, response: Response) => {
	const placesId = request.params.id
	await Inventoryplaces.delete(placesId)
	response.status(200).json(`Deleted Place with id: ${placesId}`)
}
