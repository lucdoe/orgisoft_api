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

export const updatePosition = async (req: Request, res: Response) => {
	const positionId = req.params.id
	const manager = getManager()
	const updatePosition = {
		position: req.body.position,
	}
	await manager.update(Positions, positionId, updatePosition)
	res.status(200).json(`Succesfully updated Position: ${updatePosition.position}`)
}

export const updateStatus = async (req: Request, res: Response) => {
	const statusId = req.params.id
	const manager = getManager()
	const updateStatus = {
		status: req.body.status,
	}
	await manager.update(Statuses, statusId, updateStatus)
	res.status(200).json(`Succesfully updated Status: ${updateStatus.status}`)
}

export const updateMembergroups = async (req: Request, res: Response) => {
	const membergroupId = req.params.id
	const manager = getManager()
	const updateMembergroups = {
		membergroup: req.body.membergroup,
	}
	await manager.update(Membergroups, membergroupId, updateMembergroups)
	res.status(200).json(`Succesfully updated Membergroup: ${updateMembergroups.membergroup}`)
}

export const updateQualification = async (req: Request, res: Response) => {
	const qualificationId = req.params.id
	const manager = getManager()
	const updateQualification = {
		qualification: req.body.qualification,
	}
	await manager.update(Qualifications, qualificationId, updateQualification)
	res.status(200).json(`Succesfully updated Qualification: ${updateQualification.qualification}`)
}
