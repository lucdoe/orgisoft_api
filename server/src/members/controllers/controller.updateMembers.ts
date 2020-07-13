import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Memberqualifications } from '../models/model.Memberqualification'
import { Members } from '../models/model.Member'
import { Positions } from '../models/model.Position'
import { Statuses } from '../models/model.Status'
import { Qualifications } from '../models/model.Qualification'
import { Membergroups } from '../models/model.Membergroup'

export const members = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const currentDate = new Date()
	const result = {
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
	await manager.update(Members, id, result)
	return response.status(200).json(`Succesfully updated Member: ${result.firstName} ${result.lastName}`)
}

export const memberAddresses = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const result = {
		addresses: request.body.address,
	}
	await manager.update(Members, id, result)
	return response.status(200).json(`Succesfully updated Members Address: ${result.addresses}`)
}

export const memberPositions = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const result = {
		positions: request.body.positionsId,
	}
	await manager.update(Members, id, result)
	return response.status(200).json(`Succesfully updated Members Position: ${result.positions}`)
}

export const memberStatuses = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const result = {
		statuses: request.body.statusesId,
	}
	await manager.update(Members, id, result)
	return response.status(200).json(`Succesfully updated Members Status: ${result.statuses}`)
}

export const memberQualifications = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const result = {
		members: request.body.member,
		qualifications: request.body.qualification,
		date: request.body.date,
		passed: request.body.passed,
	}
	await manager.update(Memberqualifications, id, result)
	return response.status(200).json(`Succesfully updated Members Qualification: ${result.qualifications}`)
}

export const memberGroups = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const result = {
		membergroups: request.body.membergroup,
	}
	await manager.update(Members, id, result)
	return response.status(200).json(`Succesfully updated Members Membergroup: ${result.membergroups}`)
}

export const positions = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const result = {
		position: request.body.position,
	}
	await manager.update(Positions, id, result)
	return response.status(200).json(`Succesfully updated Position: ${result.position}`)
}

export const statuses = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const result = {
		status: request.body.status,
	}
	await manager.update(Statuses, id, result)
	return response.status(200).json(`Succesfully updated Status: ${result.status}`)
}

export const groups = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const result = {
		membergroup: request.body.membergroup,
	}
	await manager.update(Membergroups, id, result)
	return response.status(200).json(`Succesfully updated Membergroup: ${result.membergroup}`)
}

export const qualifications = async (request: Request, response: Response) => {
	const id = request.params.id
	const manager = getManager()
	const result = {
		qualification: request.body.qualification,
	}
	await manager.update(Qualifications, id, result)
	return response.status(200).json(`Succesfully updated Qualification: ${result.qualification}`)
}
