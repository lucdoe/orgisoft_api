import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Memberqualifications } from '../models/member/model.Memberqualification'
import { Members } from '../models/member/model.Member'
import { Positions } from '../models/member/model.Position'
import { Statuses } from '../models/member/model.Status'
import { Qualifications } from '../models/member/model.Qualification'
import { Membergroups } from '../models/member/model.Membergroup'

export const createMember = async (req: Request, res: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const newMember = {
		addressesId: req.body.addressesId,
		positionsId: req.body.positionsId,
		statusesId: req.body.statusesId,
		membergroupsId: req.body.membergroupsId,
		title: req.body.title,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		phoneMobile: req.body.phoneMobile,
		phoneHome: req.body.phoneHome,
		email: req.body.email,
		gender: req.body.gender,
		birthday: req.body.birthday,
		note: req.body.note,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Members, newMember)
	res.status(201).json(`Succesfully inserted Member: ${newMember.firstName} ${newMember.lastName}`)
}
