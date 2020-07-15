import { Request, Response } from 'express'
import { Memberqualifications } from '../models/model.Memberqualification'
import { Members } from '../models/model.Member'
import { Positions } from '../models/model.Position'
import { Statuses } from '../models/model.Status'
import { Qualifications } from '../models/model.Qualification'
import { Membergroups } from '../models/model.Membergroup'

const responseWith = (result: { row: number | string; type: string }, response: Response) => {
	return response
		.status(200)
		.json({ message: `Succesfully deleted ${result.type} with id of: ${result.row}` })
}

export const oneMember = async (request: Request, response: Response) => {
	const result = { row: request.params.id, type: 'Member' }
	await Members.delete(result.row)
	return responseWith(result, response)
}

export const memberAddress = async (request: Request, response: Response) => {
	const result = { row: request.params.id, type: 'Member Address' }
	const update = {
		addresses: undefined,
	}
	await Members.update(result.row, update)
	return responseWith(result, response)
}

export const memberPosition = async (request: Request, response: Response) => {
	const result = { row: request.params.id, type: 'Member Position' }
	const update = {
		positions: undefined,
	}
	await Members.update(result.row, update)
	return responseWith(result, response)
}

export const memberStatus = async (request: Request, response: Response) => {
	const result = { row: request.params.id, type: 'Member Status' }
	const update = {
		statuses: undefined,
	}
	await Members.update(result.row, update)
	return responseWith(result, response)
}

export const memberGroup = async (request: Request, response: Response) => {
	const result = { row: request.params.id, type: 'Member Group' }
	const update = {
		membergroups: undefined,
	}
	await Members.update(result.row, update)
	return responseWith(result, response)
}

export const memberQualification = async (request: Request, response: Response) => {
	const result = { row: request.params.id, type: 'Member Qualification' }
	await Memberqualifications.delete(result.row)
	return responseWith(result, response)
}

export const position = async (request: Request, response: Response) => {
	const result = { row: request.params.id, type: 'Position' }
	await Positions.delete(result.row)
	return responseWith(result, response)
}

export const status = async (request: Request, response: Response) => {
	const result = { row: request.params.id, type: 'Status' }
	await Statuses.delete(result.row)
	return responseWith(result, response)
}

export const qualification = async (request: Request, response: Response) => {
	const result = { row: request.params.id, type: 'Qualification' }
	await Qualifications.delete(result.row)
	return responseWith(result, response)
}

export const group = async (request: Request, response: Response) => {
	const result = { row: request.params.id, type: 'Member Group' }
	await Membergroups.delete(result.row)
	return responseWith(result, response)
}
