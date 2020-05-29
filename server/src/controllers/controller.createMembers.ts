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

export const createPosition = async (req: Request, res: Response) => {
	const manager = getManager()
	const newPosition = {
		position: req.body.position,
	}
	await manager.insert(Positions, newPosition)
	res.status(201).json(`Succesfully inserted Position: ${newPosition.position}`)
}

export const createStatus = async (req: Request, res: Response) => {
	const manager = getManager()
	const newStatus = {
		status: req.body.status,
	}
	await manager.insert(Statuses, newStatus)
	res.status(201).json(`Succesfully inserted Status: ${newStatus.status}`)
}

export const createQualification = async (req: Request, res: Response) => {
	const manager = getManager()
	const newQualification = {
		qualification: req.body.qualification,
		description: req.body.description,
	}
	await manager.insert(Qualifications, newQualification)
	res.status(201).json(`Succesfully inserted Qualification: ${newQualification.qualification}`)
}

export const createMemberQualification = async (req: Request, res: Response) => {
	const manager = getManager()
	const newMemberQualification = {
		membersId: req.body.membersId,
		qualificationsId: req.body.qualificationsId,
		date: req.body.date,
		passed: req.body.passed,
	}
	await manager.insert(Memberqualifications, newMemberQualification)
	res.status(201).json(`Succesfully inserted Memberqualification.`)
}

export const createMembergroup = async (req: Request, res: Response) => {
	const manager = getManager()
	const newMembergroup = {
		membergroup: req.body.membergroup,
	}
	await manager.insert(Membergroups, newMembergroup)
	res.status(201).json(`Succesfully inserted Membergroup: ${newMembergroup.membergroup}`)
}
