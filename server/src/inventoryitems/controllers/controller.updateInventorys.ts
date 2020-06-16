import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Inventoryitems } from '../models/model.Inventoryitem'
import { Inventorygroups } from '../models/model.Inventorygroup'
import { Inventoryplaces } from '../models/model.Inventoryplace'

export const inventoryItems = async (request: Request, response: Response) => {
	const db = getManager()
	const currentDate = new Date()

	const row = request.params.id

	let path = request.path.split('/')[1]
	const pathIsNum = /\d/.test(path)
	if (pathIsNum) path = 'items'

	const body = request.body
	const { baseUrl } = request

	switch (path) {
		case 'items':
			const item = {
				inventorygroups: body.group,
				members: body.member,
				inventoryplaces: body.place,
				inventoryitem: body.item,
				descriptionText: body.description,
				updatedAt: currentDate,
			}
			await db.update(Inventoryitems, row, item)
			break

		case 'groups':
			const group = {
				inventorygroup: body.group,
			}
			await db.update(Inventorygroups, row, group)
			break

		case 'places':
			const place = {
				inventoryplace: body.place,
			}
			await db.update(Inventoryplaces, row, place)
			break
	}

	return response
		.status(200)
		.json({ message: `Succesfully updated ${baseUrl + '/' + path} with id: ${row}.` })
}
