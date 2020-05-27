import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Inventoryitems } from '../models/Inventory/model.Inventoryitems'
import { Inventorygroups } from '../models/Inventory/model.Inventorygroups'
import { Inventoryplaces } from '../models/Inventory/model.Inventoryplaces'

/*
	/POST - create
	create new inventoryitem 
*/
export const createInventoryitem = async (req: Request, res: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const newItem = {
		inventorygroups: req.body.inventorygroupsId,
		members: req.body.membersId,
		inventoryplaces: req.body.inventoryplacesId,
		inventoryitem: req.body.inventoryitem,
		descriptionText: req.body.description,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Inventoryitems, newItem)
	res.status(201).json(`Succesfully inserted item: ${newItem.inventoryitem}`)
}

/*
	/POST - create
	create new inventoryitem group
*/
export const createInventoryGroup = async (req: Request, res: Response) => {
	const manager = getManager()
	const inventorygroup = {
		inventorygroup: req.body.inventorygroups,
	}
	await manager.insert(Inventorygroups, inventorygroup)
	res.status(201).json(`Succesfully inserted Inventorygroup: ${inventorygroup.inventorygroup}`)
}

/*
	/POST - create
	create new inventoryitem place
*/
export const createInventoryPlace = async (req: Request, res: Response) => {
	const manager = getManager()
	const inventoryplace = {
		inventoryplace: req.body.inventoryplace,
	}
	await manager.insert(Inventoryplaces, inventoryplace)
	res.status(201).json(`Succesfully inserted Inventoryplace: ${inventoryplace.inventoryplace}`)
}

/*
	/GET - read
	read all inventoryitems
*/
export const readInventoryitems = async (req: Request, res: Response) => {
	const allInventoryitems = await Inventoryitems.find({
		relations: ['members', 'inventorygroups', 'inventoryplaces'],
	})
	res.status(200).json(allInventoryitems)
}

/*
	/GET - read
	read one inventoryitem
*/
export const readInventoryitem = async (req: Request, res: Response) => {
	const itemsId = req.params.id
	const inventoryitem = await Inventoryitems.find({
		relations: ['members', 'inventorygroups', 'inventoryplaces'],
		where: {
			id: itemsId,
		},
	})
	res.status(200).json(inventoryitem)
}

/*
	/GET - read
	read inventoryitem owner
*/
export const readItemOwner = async (req: Request, res: Response) => {
	const itemsId = req.params.id
	const inventoryitem = await Inventoryitems.find({
		select: ['id'],
		relations: ['members'],
		where: {
			id: itemsId,
		},
	})
	res.status(200).json(inventoryitem)
}

/*
	/PUT - update
	update inventoryitem
*/
export const updateInventoryitem = async (req: Request, res: Response) => {
	const itemId = req.params.id
	const manager = getManager()
	const currentDate = new Date()
	const updateItem = {
		inventorygroups: req.body.inventorygroupsId,
		members: req.body.membersId,
		inventoryplaces: req.body.inventoryplacesId,
		inventoryitem: req.body.inventoryitem,
		descriptionText: req.body.description,
		updatedAt: currentDate,
	}
	await manager.update(Inventoryitems, itemId, updateItem)
	res.status(200).json(`Succesfully updated item: ${updateItem.inventoryitem}`)
}

/*
	/PUT - update
	update inventoryitem group
*/
export const updateInventoryGroup = async (req: Request, res: Response) => {
	const groupsId = req.params.id
	const manager = getManager()
	const updateGroup = {
		inventorygroup: req.body.inventorygroup,
	}
	await manager.update(Inventorygroups, groupsId, updateGroup)
	res.status(200).json(`Succesfully updated Group: ${updateGroup.inventorygroup}`)
}

/*
	/PUT - update
	update inventoryitem place
*/
export const updateInventoryPlace = async (req: Request, res: Response) => {
	const placesId = req.params.id
	const manager = getManager()
	const updatePlace = {
		inventoryplace: req.body.inventoryplace,
	}
	await manager.update(Inventoryplaces, placesId, updatePlace)
	res.status(200).json(`Succesfully updated Group: ${updatePlace.inventoryplace}`)
}

/*
	/DELETE - delete
	delete inventoryitem 
*/
export const deleteInventoryitem = async (req: Request, res: Response) => {
	const itemsId = req.params.id
	await Inventoryitems.delete(itemsId)
	res.status(200).json(`Delete executed with id: ${itemsId}`)
}

/*
	/DELETE - delete
	delete inventoryitem group
*/
export const deleteInventorygroup = async (req: Request, res: Response) => {
	const groupsId = req.params.id
	await Inventorygroups.delete(groupsId)
	res.status(200).json(`Deleted Group with id: ${groupsId}`)
}

/*
	/DELETE - delete
	delete inventoryitem place
*/
export const deleteInventoryplace = async (req: Request, res: Response) => {
	const placesId = req.params.id
	await Inventoryplaces.delete(placesId)
	res.status(200).json(`Deleted Place with id: ${placesId}`)
}
