import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Memberqualifications } from '../models/model.Memberqualification'
import { Members } from '../models/model.Member'
import { Positions } from '../models/model.Position'
import { Statuses } from '../models/model.Status'
import { Qualifications } from '../models/model.Qualification'
import { Membergroups } from '../models/model.Membergroup'
import { Addresses } from '../models/model.Address'

export const newMember = async (request: Request, response: Response) => {
	const currentDate = new Date()
	const manager = getManager()
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
		createdAt: currentDate,
		updatedAt: currentDate,
	}
	await manager.insert(Members, result)
	return response.status(201).json(`Succesfully inserted Member: ${result.firstName} ${result.lastName}`)
}

export const newPosition = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		position: request.body.position,
	}
	await manager.insert(Positions, result)
	return response.status(201).json(`Succesfully inserted Position: ${result.position}`)
}

export const newStatus = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		status: request.body.status,
	}
	await manager.insert(Statuses, result)
	return response.status(201).json(`Succesfully inserted Status: ${result.status}`)
}

export const newQualification = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		qualification: request.body.qualification,
		description: request.body.description,
	}
	await manager.insert(Qualifications, result)
	return response.status(201).json(`Succesfully inserted Qualification: ${result.qualification}`)
}

export const newMemberqualification = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		membersId: request.body.membersId,
		qualificationsId: request.body.qualificationsId,
		date: request.body.date,
		passed: request.body.passed,
	}
	await manager.insert(Memberqualifications, result)
	return response.status(201).json(`Succesfully inserted Memberqualification.`)
}

export const newMembergroup = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		membergroup: request.body.membergroup,
	}
	await manager.insert(Membergroups, result)
	return response.status(201).json(`Succesfully inserted Membergroup: ${result.membergroup}`)
}

export const newAddress = async (request: Request, response: Response) => {
	const manager = getManager()
	const result = {
		citysId: request.body.city,
		street: request.body.street,
		streetNumber: request.body.number,
		streetNumberSuffix: request.body.suffix,
		unit: request.body.unit,
		appartmentNumber: request.body.aNumber,
		note: request.body.note,
		createdAt: request.body.created,
		updatedAt: request.body.updated,
	}
	await manager.insert(Addresses, result)
	return response.status(201).json(`Succesfully inserted Address: ${result.street}`)
}
