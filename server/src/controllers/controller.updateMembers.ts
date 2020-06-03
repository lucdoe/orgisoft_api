import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Memberqualifications } from '../models/member/model.Memberqualification'
import { Members } from '../models/member/model.Member'

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

export const updateMemberAddress = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const manager = getManager()
	const updateMemberAddress = {
		addresses: req.body.address,
	}
	await manager.update(Members, memberId, updateMemberAddress)
	res.status(200).json(`Succesfully updated Members Address: ${updateMemberAddress.addresses}`)
}

export const updateMemberPosition = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const manager = getManager()
	const updateMemberPosition = {
		positions: req.body.positionsId,
	}
	await manager.update(Members, memberId, updateMemberPosition)
	res.status(200).json(`Succesfully updated Members Position: ${updateMemberPosition.positions}`)
}

export const updateMemberStatus = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const manager = getManager()
	const updateMemberStatus = {
		statuses: req.body.statusesId,
	}
	await manager.update(Members, memberId, updateMemberStatus)
	res.status(200).json(`Succesfully updated Members Status: ${updateMemberStatus.statuses}`)
}

export const updateMemberQualification = async (req: Request, res: Response) => {
	const memberQualificationId = req.params.id
	const manager = getManager()
	const updateMemberQualification = {
		membersId: req.body.member,
		qualificationsId: req.body.qualification,
		date: req.body.date,
		passed: req.body.passed,
	}
	await manager.update(Memberqualifications, memberQualificationId, updateMemberQualification)
	res.status(200).json(
		`Succesfully updated Members Qualification: ${updateMemberQualification.qualificationsId}`
	)
}

export const updateMemberMembergroup = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const manager = getManager()
	const updateMemberMembergroup = {
		membergroups: req.body.membergroup,
	}
	await manager.update(Members, memberId, updateMemberMembergroup)
	res.status(200).json(`Succesfully updated Members Membergroup: ${updateMemberMembergroup.membergroups}`)
}
