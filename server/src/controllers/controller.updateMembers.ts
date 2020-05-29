import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Memberqualifications } from '../models/member/model.Memberqualification'
import { Members } from '../models/member/model.Member'
import { Positions } from '../models/member/model.Position'
import { Statuses } from '../models/member/model.Status'
import { Qualifications } from '../models/member/model.Qualification'
import { Membergroups } from '../models/member/model.Membergroup'

export const updateMember = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const manager = getManager()
	const currentDate = new Date()
	const updateMember = {
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
		updatedAt: currentDate,
	}
	await manager.update(Members, memberId, updateMember)
	res.status(200).json(`Succesfully updated Member: ${updateMember.firstName} ${updateMember.lastName}`)
}

export const updateMemberPosition = async (req: Request, res: Response) => {
	const manager = getManager()
	const newMemberPosition = {}
	await manager.insert(Positions, newMemberPosition)
	res.status(200).json(`Succesfully updated Position: ${newMemberPosition}`)
}

export const updateMemberStatus = async (req: Request, res: Response) => {
	const manager = getManager()
	const newMemberStatus = {}
	await manager.insert(Statuses, newMemberStatus)
	res.status(200).json(`Succesfully updated Status: ${newMemberStatus}`)
}

export const updateMemberQualification = async (req: Request, res: Response) => {
	const manager = getManager()
	const newMemberQualification = {}
	await manager.insert(Qualifications, newMemberQualification)
	res.status(200).json(`Succesfully updated Qualification: ${newMemberQualification}`)
}

export const updateMemberMembergroup = async (req: Request, res: Response) => {
	const manager = getManager()
	const newMembergroup = {}
	await manager.insert(Membergroups, newMembergroup)
	res.status(200).json(`Succesfully updated Membergroup: ${newMembergroup}`)
}
