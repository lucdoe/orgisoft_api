import { Request, Response, response } from 'express'
import { getManager } from 'typeorm'
import { Memberqualifications } from '../models/model.Memberqualification'
import { Members } from '../models/model.Member'
import { Positions } from '../models/model.Position'
import { Statuses } from '../models/model.Status'
import { Qualifications } from '../models/model.Qualification'
import { Membergroups } from '../models/model.Membergroup'

const message = (data: { row: number | string; type: string }, response: Response) => {
	return response.status(200).json({ message: `Succesfully deleted ${data.type} with id of: ${data.row}` })
}

export const deleteMember = async (request: Request, response: Response) => {
	const data = { row: request.params.id, type: 'Member' }
	await Members.delete(data.row)
	message(data, response)
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
