import { Request, Response } from 'express'
import { Memberqualifications } from '../models/model.Memberqualification'
import { Members } from '../models/model.Member'
import { Positions } from '../models/model.Position'
import { Statuses } from '../models/model.Status'
import { Qualifications } from '../models/model.Qualification'
import { Membergroups } from '../models/model.Membergroup'

const responseWith = (data: { row: number | string; type: string }, response: Response) => {
	return response.status(200).json({ message: `Succesfully deleted ${data.type} with id of: ${data.row}` })
}

export const deleteMember = async (request: Request, response: Response) => {
	const data = { row: request.params.id, type: 'Member' }
	await Members.delete(data.row)
	responseWith(data, response)
}

export const deleteMemberAddress = async (request: Request, response: Response) => {
	const data = { row: request.params.id, type: 'Member Address' }
	const update = {
		addresses: undefined,
	}
	await Members.update(data.row, update)
	responseWith(data, response)
}

export const deleteMemberPosition = async (request: Request, response: Response) => {
	const data = { row: request.params.id, type: 'Member Position' }
	const update = {
		positions: undefined,
	}
	await Members.update(data.row, update)
	responseWith(data, response)
}

export const deleteMemberStatus = async (request: Request, response: Response) => {
	const data = { row: request.params.id, type: 'Member Status' }
	const update = {
		statuses: undefined,
	}
	await Members.update(data.row, update)
	responseWith(data, response)
}

export const deleteMemberMembergroup = async (request: Request, response: Response) => {
	const data = { row: request.params.id, type: 'Member Group' }
	const update = {
		membergroups: undefined,
	}
	await Members.update(data.row, update)
	responseWith(data, response)
}

export const deleteMemberqualification = async (request: Request, response: Response) => {
	const data = { row: request.params.id, type: 'Member Qualification' }
	await Memberqualifications.delete(data.row)
	responseWith(data, response)
}

export const deletePosition = async (request: Request, response: Response) => {
	const data = { row: request.params.id, type: 'Position' }
	await Positions.delete(data.row)
	responseWith(data, response)
}

export const deleteStatus = async (request: Request, response: Response) => {
	const data = { row: request.params.id, type: 'Status' }
	await Statuses.delete(data.row)
	responseWith(data, response)
}

export const deleteQualification = async (request: Request, response: Response) => {
	const data = { row: request.params.id, type: 'Qualification' }
	await Qualifications.delete(data.row)
	responseWith(data, response)
}

export const deleteMembergroup = async (request: Request, response: Response) => {
	const data = { row: request.params.id, type: 'Member Group' }
	await Membergroups.delete(data.row)
	responseWith(data, response)
}
