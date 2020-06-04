import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Memberqualifications } from '../models/model.Memberqualification'
import { Members } from '../models/model.Member'
import { Positions } from '../models/model.Position'
import { Statuses } from '../models/model.Status'
import { Qualifications } from '../models/model.Qualification'
import { Membergroups } from '../models/model.Membergroup'

export const createMember = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
	const newMember = {
		addressesId: request.body.addressesId,
		positionsId: request.body.positionsId,
		statusesId: request.body.statusesId,
		membergroupsId: request.body.membergroupsId,
		title: request.body.title,
		firstName: request.body.firstName,
		lastName: request.body.lastName,
		phoneMobile: request.body.phoneMobile,
		phoneHome: request.body.phoneHome,
		email: request.body.email,
		gender: request.body.gender,
		birthday: request.body.birthday,
		note: request.body.note,
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Members, newMember)
	response.status(201).json(`Succesfully inserted Member: ${newMember.firstName} ${newMember.lastName}`)
}

export const createPosition = async (request: Request, response: Response) => {
	const manager = getManager()
	const newPosition = {
		position: request.body.position,
	}
	await manager.insert(Positions, newPosition)
	response.status(201).json(`Succesfully inserted Position: ${newPosition.position}`)
}

export const createStatus = async (request: Request, response: Response) => {
	const manager = getManager()
	const newStatus = {
		status: request.body.status,
	}
	await manager.insert(Statuses, newStatus)
	response.status(201).json(`Succesfully inserted Status: ${newStatus.status}`)
}

export const createQualification = async (request: Request, response: Response) => {
	const manager = getManager()
	const newQualification = {
		qualification: request.body.qualification,
		description: request.body.description,
	}
	await manager.insert(Qualifications, newQualification)
	response.status(201).json(`Succesfully inserted Qualification: ${newQualification.qualification}`)
}

export const createMemberqualification = async (request: Request, response: Response) => {
	const manager = getManager()
	const newMemberQualification = {
		membersId: request.body.membersId,
		qualificationsId: request.body.qualificationsId,
		date: request.body.date,
		passed: request.body.passed,
	}
	await manager.insert(Memberqualifications, newMemberQualification)
	response.status(201).json(`Succesfully inserted Memberqualification.`)
}

export const createMembergroup = async (request: Request, response: Response) => {
	const manager = getManager()
	const newMembergroup = {
		membergroup: request.body.membergroup,
	}
	await manager.insert(Membergroups, newMembergroup)
	response.status(201).json(`Succesfully inserted Membergroup: ${newMembergroup.membergroup}`)
}
