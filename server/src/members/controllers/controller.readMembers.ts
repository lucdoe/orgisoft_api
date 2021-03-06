import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Memberqualifications } from '../models/model.Memberqualification'
import { Members } from '../models/model.Member'
import { Positions } from '../models/model.Position'
import { Statuses } from '../models/model.Status'
import { Qualifications } from '../models/model.Qualification'
import { Membergroups } from '../models/model.Membergroup'

export const allMembers = async (request: Request, response: Response) => {
	const skip = +request.query.skip
	const take = +request.query.take
	const { desc, select } = request.query
	const orderDirection = desc == '1' ? 'DESC' : 'ASC'

	const result = await Members.find({
		relations: ['addresses', 'addresses.citys', 'positions', 'statuses', 'membergroups'],
		order: {
			lastName: orderDirection,
		},
		skip: skip,
		take: take,
	})
	return response.status(200).json(result)
}

export const allMembersLimited = async (request: Request, response: Response) => {
	const skip = +request.query.skip
	const take = +request.query.take
	const { desc } = request.query
	const orderDirection = desc == '1' ? 'DESC' : 'ASC'

	const result = await Members.find({
		relations: ['positions', 'statuses', 'membergroups'],
		order: {
			lastName: orderDirection,
		},
		skip: skip,
		take: take,
		select: ['id', 'firstName', 'lastName', 'email'],
	})
	return response.status(200).json(result)
}

export const oneMember = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Members.find({
		relations: ['addresses', 'addresses.citys', 'positions', 'statuses', 'membergroups', 'inventoryitems'],
		where: {
			id: id,
		},
	})
	return response.status(200).json(result)
}

export const memberAddress = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Members.find({
		select: ['id'],
		relations: ['addresses', 'addresses.citys'],
		where: {
			id: id,
		},
	})
	return response.status(200).json(result)
}

export const memberPosition = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Members.find({
		select: ['id'],
		relations: ['positions'],
		where: {
			id: id,
		},
	})
	return response.status(200).json(result)
}

export const memberStatus = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Members.find({
		select: ['id'],
		relations: ['statuses'],
		where: {
			id: id,
		},
	})
	return response.status(200).json(result)
}

export const memberGroup = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Members.find({
		select: ['id'],
		relations: ['membergroups'],
		where: {
			id: id,
		},
	})
	return response.status(200).json(result)
}

export const memberQualification = async (request: Request, response: Response) => {
	const id = +request.params.id
	const memberqualifications = await Memberqualifications.find({
		relations: ['qualifications'],
		where: {
			members: id,
		},
	})
	const result = {
		id,
		memberqualifications,
	}
	return response.status(200).json(result)
}

export const memberInventoryitems = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Members.find({
		select: ['id'],
		relations: ['inventoryitems'],
		where: {
			id,
		},
	})
	return response.status(200).json(result)
}

export const allPositions = async (request: Request, response: Response) => {
	const skip = +request.query.skip
	const take = +request.query.take
	const { desc } = request.query
	const orderDirection = desc == '1' ? 'DESC' : 'ASC'
	const result = await Positions.find({
		order: {
			position: orderDirection,
		},
		skip: skip,
		take: take,
	})
	return response.status(200).json(result)
}

export const onePosition = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Positions.find({
		where: {
			id,
		},
	})
	return response.status(200).json(result)
}

export const allStatuses = async (request: Request, response: Response) => {
	const skip = +request.query.skip
	const take = +request.query.take
	const { desc } = request.query
	const orderDirection = desc == '1' ? 'DESC' : 'ASC'
	const result = await Statuses.find({
		order: {
			status: orderDirection,
		},
		skip: skip,
		take: take,
	})
	return response.status(200).json(result)
}

export const oneStatus = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Statuses.find({
		where: {
			id,
		},
	})
	return response.status(200).json(result)
}

export const allQualifications = async (request: Request, response: Response) => {
	const skip = +request.query.skip
	const take = +request.query.take
	const { desc } = request.query
	const orderDirection = desc == '1' ? 'DESC' : 'ASC'
	const result = await Qualifications.find({
		order: {
			qualification: orderDirection,
		},
		skip: skip,
		take: take,
	})
	return response.status(200).json(result)
}

export const oneQualification = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Qualifications.find({
		where: {
			id,
		},
	})
	return response.status(200).json(result)
}

export const allGroups = async (request: Request, response: Response) => {
	const skip = +request.query.skip
	const take = +request.query.take
	const { desc } = request.query
	const orderDirection = desc == '1' ? 'DESC' : 'ASC'
	const result = await Membergroups.find({
		order: {
			membergroup: orderDirection,
		},
		skip: skip,
		take: take,
	})
	return response.status(200).json(result)
}

export const oneGroup = async (request: Request, response: Response) => {
	const id = request.params.id
	const result = await Membergroups.find({
		where: {
			id,
		},
	})
	return response.status(200).json(result)
}
