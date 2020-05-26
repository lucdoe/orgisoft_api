import { Request, Response } from 'express'
import { Memberqualification } from '../../models/Members/Memberqualification'

export const allMembers = async (req: Request, res: Response) => {
	const allMembers = await Memberqualification.find({
		relations: [
			'qualification',
			'member',
			'member.address',
			'member.address.city',
			'member.position',
			'member.status',
			'member.membergroup',
		],
	})
	res.status(200).json(allMembers)
}
