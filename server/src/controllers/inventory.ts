import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Inventoryitem } from '../models/Inventory/Inventoryitem'
import { Inventorygroup } from '../models/Inventory/Inventorygroup'
import { Inventoryplace } from '../models/Inventory/Inventoryplace'

/*
	/POST - create
	create new inventoryitem 
*/
export const createInventoryitem = async (req: Request, res: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const newItem = {
		inventorygroup: req.body.inventorygroupId,
		member: req.body.memberId,
		inventoryplace: req.body.inventoryplaceId,
		inventoryitem: req.body.inventoryitem,
		descriptionText: req.body.description,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Inventoryitem, newItem)
	res.status(201).json(`Succesfully inserted item: ${newItem.inventoryitem}`)
}

/*
	/POST - create
	create new inventoryitem group
*/
export const createInventoryGroup = async (req: Request, res: Response) => {
	const manager = getManager()
	const inventorygroup = {
		inventorygroup: req.body.inventorygroup,
	}
	await manager.insert(Inventorygroup, inventorygroup)
	res.status(201).json(`Succesfully inserted Inventorygroup: ${inventorygroup}`)
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
	await manager.insert(Inventoryplace, inventoryplace)
	res.status(201).json(`Succesfully inserted Inventoryplace: ${inventoryplace}`)
}

/*
	/GET - read
	read all inventoryitems
*/
export const readInventoryitems = async (req: Request, res: Response) => {
	const allInventoryitems = await Inventoryitem.find({
		relations: ['member', 'inventorygroup', 'inventoryplace'],
		select: ['id'],
	})
	res.status(200).json(allInventoryitems)
}

/*
	/GET - read
	read one inventoryitem
*/
export const readInventoryitem = async (req: Request, res: Response) => {
	const itemId = req.params.id
	const inventoryitem = await Inventoryitem.find({
		relations: ['inventorygroup', 'inventoryplace'],
		where: {
			id: itemId,
		},
	})
	res.status(200).json(inventoryitem)
}

/*
	/GET - read
	read inventoryitem owner
*/
export const readItemOwner = async (req: Request, res: Response) => {
	const itemId = req.params.id
	const inventoryitem = await Inventoryitem.find({
		select: ['id'],
		relations: ['member'],
		where: {
			id: itemId,
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
		inventorygroup: req.body.inventorygroupId,
		member: req.body.memberId,
		inventoryplace: req.body.inventoryplaceId,
		inventoryitem: req.body.inventoryitem,
		descriptionText: req.body.description,
		updatedAt: currentDate,
	}
	await manager.update(Inventoryitem, itemId, updateItem)
	res.status(200).json(`Succesfully updated item: ${updateItem.inventoryitem}`)
}

/*
	/PUT - update
	update inventoryitem group
*/
export const updateInventoryGroup = async (req: Request, res: Response) => {
	const groupId = req.params.id
	const manager = getManager()
	const updateGroup = {
		inventorygroup: req.body.inventorygroup,
	}
	await manager.update(Inventorygroup, groupId, updateGroup)
	res.status(200).json(`Succesfully updated Group: ${updateGroup.inventorygroup}`)
}

/*
	/PUT - update
	update inventoryitem place
*/
export const updateInventoryPlace = async (req: Request, res: Response) => {
	const placeId = req.params.id
	const manager = getManager()
	const updatePlace = {
		inventoryplace: req.body.inventoryplace,
	}
	await manager.update(Inventoryplace, placeId, updatePlace)
	res.status(200).json(`Succesfully updated Group: ${updatePlace.inventoryplace}`)
}

/*
	/DELETE - delete
	delete inventoryitem 
*/
export const deleteInventoryitem = async (req: Request, res: Response) => {
	const itemId = req.params.id
	await Inventoryitem.delete(itemId)
	res.status(200).json(`Delete executed with id: ${itemId}`)
}

/*
	/DELETE - delete
	delete inventoryitem group
*/
export const deleteInventorygroup = async (req: Request, res: Response) => {
	const groupId = req.params.id
	await Inventorygroup.delete(groupId)
	res.status(200).json(`Deleted Group with id: ${groupId}`)
}

/*
	/DELETE - delete
	delete inventoryitem place
*/
export const deleteInventoryplace = async (req: Request, res: Response) => {
	const placeId = req.params.id
	await Inventoryplace.delete(placeId)
	res.status(200).json(`Deleted Place with id: ${placeId}`)
}
