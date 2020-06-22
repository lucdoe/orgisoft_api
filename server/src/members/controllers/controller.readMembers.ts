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

	const allMembers = await Members.find({
		relations: ['addresses', 'addresses.citys', 'positions', 'statuses', 'membergroups'],
		order: {
			lastName: orderDirection,
		},
		skip: skip,
		take: take,
	})
	response.status(200).json(allMembers)
}

export const allMembersLimited = async (request: Request, response: Response) => {
	const skip = +request.query.skip
	const take = +request.query.take
	const { desc } = request.query
	const orderDirection = desc == '1' ? 'DESC' : 'ASC'

	const allMembers = await Members.find({
		relations: ['positions', 'statuses', 'membergroups'],
		order: {
			lastName: orderDirection,
		},
		skip: skip,
		take: take,
		select: ['id', 'firstName', 'lastName', 'email'],
	})
	response.status(200).json(allMembers)
}

export const oneMember = async (request: Request, response: Response) => {
	const membersId = request.params.id
	const member = await Members.find({
		relations: ['addresses', 'addresses.citys', 'positions', 'statuses', 'membergroups', 'inventoryitems'],
		where: {
			id: membersId,
		},
	})
	response.status(200).json(member)
}

export const memberAddress = async (request: Request, response: Response) => {
	const membersId = request.params.id
	const address = await Members.find({
		select: ['id'],
		relations: ['addresses', 'addresses.citys'],
		where: {
			id: membersId,
		},
	})
	response.status(200).json(address)
}

export const memberPosition = async (request: Request, response: Response) => {
	const membersId = request.params.id
	const position = await Members.find({
		select: ['id'],
		relations: ['positions'],
		where: {
			id: membersId,
		},
	})
	response.status(200).json(position)
}

export const memberStatus = async (request: Request, response: Response) => {
	const membersId = request.params.id
	const status = await Members.find({
		select: ['id'],
		relations: ['statuses'],
		where: {
			id: membersId,
		},
	})
	response.status(200).json(status)
}

export const memberGroup = async (request: Request, response: Response) => {
	const membersId = request.params.id
	const group = await Members.find({
		select: ['id'],
		relations: ['membergroups'],
		where: {
			id: membersId,
		},
	})
	response.status(200).json(group)
}

export const memberQualification = async (request: Request, response: Response) => {
	const membersId = request.params.id
	const memberqualifications = await Memberqualifications.find({
		relations: ['members', 'qualifications'],
		where: {
			members: membersId,
		},
	})
	response.status(200).json(memberqualifications)
}

export const qualification = async (request: Request, response: Response) => {
	const memberqualificationId = request.params.id
	const memberqualification = await Memberqualifications.find({
		where: {
			id: memberqualificationId,
		},
	})
	response.status(200).json(memberqualification)
}

export const memberInventoryitems = async (request: Request, response: Response) => {
	const membersId = request.params.id
	const items = await Members.find({
		select: ['id'],
		relations: ['inventoryitems'],
		where: {
			id: membersId,
		},
	})
	response.status(200).json(items)
}

export const allPositions = async (request: Request, response: Response) => {
	const positions = await getRepository(Positions).createQueryBuilder().getMany()
	response.status(200).json(positions)
}

export const onePosition = async (request: Request, response: Response) => {
	const positionsId = request.params.id
	const position = await Positions.find({
		where: {
			id: positionsId,
		},
	})
	response.status(200).json(position)
}

export const allStatuses = async (request: Request, response: Response) => {
	const statuses = await getRepository(Statuses).createQueryBuilder().getMany()
	response.status(200).json(statuses)
}

export const oneStatus = async (request: Request, response: Response) => {
	const statusesId = request.params.id
	const status = await Statuses.find({
		where: {
			id: statusesId,
		},
	})
	response.status(200).json(status)
}

export const allQualifications = async (request: Request, response: Response) => {
	const qualifications = await getRepository(Qualifications).createQueryBuilder().getMany()
	response.status(200).json(qualifications)
}

export const oneQualification = async (request: Request, response: Response) => {
	const qualificationsId = request.params.id
	const qualification = await Qualifications.find({
		where: {
			id: qualificationsId,
		},
	})
	response.status(200).json(qualification)
}

export const allGroups = async (request: Request, response: Response) => {
	const membergroups = await getRepository(Membergroups).createQueryBuilder().getMany()
	response.status(200).json(membergroups)
}

export const oneGroup = async (request: Request, response: Response) => {
	const membergroupsId = request.params.id
	const membergroup = await Membergroups.find({
		where: {
			id: membergroupsId,
		},
	})
	response.status(200).json(membergroup)
}
