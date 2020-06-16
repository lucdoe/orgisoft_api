import { Request, Response } from 'express'
import { Inventoryitems } from '../models/model.Inventoryitem'
import { Inventorygroups } from '../models/model.Inventorygroup'
import { Inventoryplaces } from '../models/model.Inventoryplace'

export const inventoryItems = async (request: Request, response: Response) => {
	const row = request.params.id

	let path = request.path.split('/')[1]
	const pathIsNum = /\d/.test(path)
	if (pathIsNum) path = 'items'

	const { baseUrl } = request

	switch (path) {
		case 'items':
			await Inventoryitems.delete(row)
			break

		case 'groups':
			await Inventorygroups.delete(row)
			break

		case 'places':
			await Inventoryplaces.delete(row)
			break
	}

	return response
		.status(200)
		.json({ message: `Succesfully deleted ${baseUrl + '/' + path} with id: ${row}.` })
}
