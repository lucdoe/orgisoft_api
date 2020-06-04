import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Memberqualifications } from '../../models/members/model.Memberqualification'
import { Members } from '../../models/members/model.Member'
import { Positions } from '../../models/members/model.Position'
import { Statuses } from '../../models/members/model.Status'
import { Qualifications } from '../../models/members/model.Qualification'
import { Membergroups } from '../../models/members/model.Membergroup'

export const deleteMember = async (request: Request, response: Response) => {
	const memberId = request.params.id
	const manager = getManager()
	await manager.delete(Members, memberId)
	response.status(200).json(`Succesfully deleted Member.`)
}

export const deleteMemberAddress = async (request: Request, response: Response) => {
	const memberId = request.params.id
	const manager = getManager()
	const deleteMemberAddress = {
		addresses: undefined,
	}
	await manager.update(Members, memberId, deleteMemberAddress)
	response.status(200).json(`Succesfully deleted Members Address.`)
}

export const deleteMemberPosition = async (request: Request, response: Response) => {
	const memberId = request.params.id
	const manager = getManager()
	const deleteMemberPosition = {
		positions: undefined,
	}
	await manager.update(Members, memberId, deleteMemberPosition)
	response.status(200).json(`Succesfully deleted Members Position.`)
}

export const deleteMemberStatus = async (request: Request, response: Response) => {
	const memberId = request.params.id
	const manager = getManager()
	const deleteMemberStatus = {
		statuses: undefined,
	}
	await manager.update(Members, memberId, deleteMemberStatus)
	response.status(200).json(`Succesfully deleted Members Status.`)
}

export const deleteMemberMembergroup = async (request: Request, response: Response) => {
	const memberId = request.params.id
	const manager = getManager()
	const deleteMemberMembergroup = {
		membergroups: undefined,
	}
	await manager.update(Members, memberId, deleteMemberMembergroup)
	response.status(200).json(`Succesfully deleted Members Membergroup.`)
}

export const deleteMemberqualification = async (request: Request, response: Response) => {
	const manager = getManager()
	const memberQualificationId = request.params.id
	await manager.delete(Memberqualifications, memberQualificationId)
	response.status(200).json(`Succesfully deleted Memberqualification.`)
}

export const deletePosition = async (request: Request, response: Response) => {
	const manager = getManager()
	const memberPositionId = request.params.id
	await manager.delete(Positions, memberPositionId)
	response.status(200).json(`Succesfully deleted Position.`)
}

export const deleteStatus = async (request: Request, response: Response) => {
	const manager = getManager()
	const memberStatusId = request.params.id
	await manager.delete(Statuses, memberStatusId)
	response.status(200).json(`Succesfully deleted Status.`)
}

export const deleteQualification = async (request: Request, response: Response) => {
	const manager = getManager()
	const qualificationId = request.params.id
	await manager.delete(Qualifications, qualificationId)
	response.status(200).json(`Succesfully deleted Qualification.`)
}

export const deleteMembergroup = async (request: Request, response: Response) => {
	const manager = getManager()
	const memberMembergroupId = request.params.id
	await manager.delete(Membergroups, memberMembergroupId)
	response.status(200).json(`Succesfully deleted Membergroup.`)
}
