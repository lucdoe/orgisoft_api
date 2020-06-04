import { Request, Response } from 'express'
import { Inventoryitems } from '../../models/inventoryitems/model.Inventoryitem'
import { Inventorygroups } from '../../models/inventoryitems/model.Inventorygroup'
import { Inventoryplaces } from '../../models/inventoryitems/model.Inventoryplace'

export const deleteInventoryitem = async (request: Request, response: Response) => {
	const itemsId = request.params.id
	await Inventoryitems.delete(itemsId)
	response.status(200).json(`Delete executed with id: ${itemsId}`)
}

export const deleteInventorygroup = async (request: Request, response: Response) => {
	const groupsId = request.params.id
	await Inventorygroups.delete(groupsId)
	response.status(200).json(`Deleted Group with id: ${groupsId}`)
}

export const deleteInventoryplace = async (request: Request, response: Response) => {
	const placesId = request.params.id
	await Inventoryplaces.delete(placesId)
	response.status(200).json(`Deleted Place with id: ${placesId}`)
}
