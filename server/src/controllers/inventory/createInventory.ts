import { Inventoryitem } from '../../models/Inventory/Inventoryitem'
import { Request, Response } from 'express'
import { getRepository, getConnection, getManager } from 'typeorm'
import { Inventorygroup } from '../../models/Inventory/Inventorygroup'

export const createInventoryitem = async (req: Request, res: Response) => {
	const itemRepository = getRepository(Inventoryitem) // you can also get it via getConnection().getRepository() or getManager().getRepository()
	const newItem = new Inventoryitem()
	newItem.inventorygroup = req.body.inventorygroupId
	newItem.member = req.body.memberId
	newItem.inventoryplace = req.body.inventoryplaceId
	newItem.inventoryitem = req.body.inventoryitem
	newItem.descriptionText = req.body.description
	newItem.createdAt = req.body.createdAt
	newItem.updatedAt = req.body.updatedAt
	await itemRepository.save(newItem)
	res.status(201).json('Succesfully inserted item.')
}

export const updateInventoryitemById = async (req: Request, res: Response) => {
	const idOfItemToUpdate = req.params.id
	const {
		inventorygroupId,
		memberId,
		inventoryplaceId,
		inventoryitem,
		description,
	} = req.body
	const connection = getConnection()
	const itemRepository = connection.getRepository(Inventoryitem)
	const updateQuerry = `UPDATE orgasoft.inventoryitem SET inventorygroupId = ${inventorygroupId}, memberId = ${memberId}, inventoryplaceId = ${inventoryplaceId}, inventoryitem = "${inventoryitem}", descriptionText = "${description}", updatedAt = DATE(NOW()) WHERE id = ${idOfItemToUpdate};`
	const rawData = await itemRepository.query(updateQuerry)

	res.status(200).json(rawData)
}
