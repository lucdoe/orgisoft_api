import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Memberqualifications } from '../models/model.Memberqualification'
import { Members } from '../models/model.Member'
import { Positions } from '../models/model.Position'
import { Statuses } from '../models/model.Status'
import { Qualifications } from '../models/model.Qualification'
import { Membergroups } from '../models/model.Membergroup'

export const updateMember = async (request: Request, response: Response) => {
	const memberId = request.params.id
	const manager = getManager()
	const currentDate = new Date()
	const updateMember = {
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
		updatedAt: currentDate,
	}
	await manager.update(Members, memberId, updateMember)
	response.status(200).json(`Succesfully updated Member: ${updateMember.firstName} ${updateMember.lastName}`)
}

export const updateMemberAddress = async (request: Request, response: Response) => {
	const memberId = request.params.id
	const manager = getManager()
	const updateMemberAddress = {
		addresses: request.body.address,
	}
	await manager.update(Members, memberId, updateMemberAddress)
	response.status(200).json(`Succesfully updated Members Address: ${updateMemberAddress.addresses}`)
}

export const updateMemberPosition = async (request: Request, response: Response) => {
	const memberId = request.params.id
	const manager = getManager()
	const updateMemberPosition = {
		positions: request.body.positionsId,
	}
	await manager.update(Members, memberId, updateMemberPosition)
	response.status(200).json(`Succesfully updated Members Position: ${updateMemberPosition.positions}`)
}

export const updateMemberStatus = async (request: Request, response: Response) => {
	const memberId = request.params.id
	const manager = getManager()
	const updateMemberStatus = {
		statuses: request.body.statusesId,
	}
	await manager.update(Members, memberId, updateMemberStatus)
	response.status(200).json(`Succesfully updated Members Status: ${updateMemberStatus.statuses}`)
}

export const updateMemberqualification = async (request: Request, response: Response) => {
	const memberQualificationId = request.params.id
	const manager = getManager()
	const updateMemberQualification = {
		members: request.body.member,
		qualifications: request.body.qualification,
		date: request.body.date,
		passed: request.body.passed,
	}
	await manager.update(Memberqualifications, memberQualificationId, updateMemberQualification)
	response
		.status(200)
		.json(`Succesfully updated Members Qualification: ${updateMemberQualification.qualifications}`)
}

export const updateMemberMembergroup = async (request: Request, response: Response) => {
	const memberId = request.params.id
	const manager = getManager()
	const updateMemberMembergroup = {
		membergroups: request.body.membergroup,
	}
	await manager.update(Members, memberId, updateMemberMembergroup)
	response
		.status(200)
		.json(`Succesfully updated Members Membergroup: ${updateMemberMembergroup.membergroups}`)
}

export const updatePosition = async (request: Request, response: Response) => {
	const positionId = request.params.id
	const manager = getManager()
	const updatePosition = {
		position: request.body.position,
	}
	await manager.update(Positions, positionId, updatePosition)
	response.status(200).json(`Succesfully updated Position: ${updatePosition.position}`)
}

export const updateStatus = async (request: Request, response: Response) => {
	const statusId = request.params.id
	const manager = getManager()
	const updateStatus = {
		status: request.body.status,
	}
	await manager.update(Statuses, statusId, updateStatus)
	response.status(200).json(`Succesfully updated Status: ${updateStatus.status}`)
}

export const updateMembergroups = async (request: Request, response: Response) => {
	const membergroupId = request.params.id
	const manager = getManager()
	const updateMembergroups = {
		membergroup: request.body.membergroup,
	}
	await manager.update(Membergroups, membergroupId, updateMembergroups)
	response.status(200).json(`Succesfully updated Membergroup: ${updateMembergroups.membergroup}`)
}

export const updateQualification = async (request: Request, response: Response) => {
	const qualificationId = request.params.id
	const manager = getManager()
	const updateQualification = {
		qualification: request.body.qualification,
	}
	await manager.update(Qualifications, qualificationId, updateQualification)
	response.status(200).json(`Succesfully updated Qualification: ${updateQualification.qualification}`)
}
