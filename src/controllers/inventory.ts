import { Request, Response } from 'express'
import { Memberitemamount } from '../models/Inventory/Memberitemamount'

export const findInventoryitems = async (req: Request, res: Response) => {
	// const allInventoryitems = await getConnection()
	// 	.getRepository(Memberitemamount)
	// 	.createQueryBuilder('memberitemamount')
	// 	.innerJoinAndSelect('member.memberitemamount', 'member')
	// 	.getMany()
	const allInventoryitems = await Memberitemamount.find({
		relations: [
			'member',
			'inventoryitem',
			'inventoryitem.inventorygroup',
			'inventoryitem.inventoryplace',
		],
	})
	res.status(200).json(allInventoryitems)
}

// export const findInventoryitemById = async (req: Request, res: Response) => {
// 	const currency = await Currency.findOne(req.params.id)
// 	res.status(200).json(currency)
// }
