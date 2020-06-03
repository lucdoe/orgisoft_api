import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Memberqualifications } from '../models/member/model.Memberqualification'
import { Members } from '../models/member/model.Member'
import { Positions } from '../models/member/model.Position'
import { Statuses } from '../models/member/model.Status'
import { Qualifications } from '../models/member/model.Qualification'
import { Membergroups } from '../models/member/model.Membergroup'

/*
	/GET - read
	read all members
*/
export const readMembers = async (request: Request, response: Response) => {
	const allMembers = await Memberqualifications.find({
		relations: [
			'qualifications',
			'members',
			'members.addresses',
			'members.addresses.citys',
			'members.positions',
			'members.statuses',
			'members.membergroups',
		],
	})
	response.status(200).json(allMembers)
}

/*
	/GET - read
	read member
*/
export const readMember = async (request: Request, response: Response) => {
	const membersId = request.params.id
	const member = await Members.find({
		relations: ['addresses', 'addresses.citys', 'positions', 'statuses', 'membergroups', 'inventoryitems'],
		where: {
			id: membersId,
		},
	})
	response.status(200).json(member)
}

/*
	/GET - read
	read member address
*/
export const readMemberAddress = async (request: Request, response: Response) => {
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

/*
	/GET - read
	read member position
*/
export const readMemberPosition = async (request: Request, response: Response) => {
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

/*
	/GET - read
	read member status
*/
export const readMemberStatus = async (request: Request, response: Response) => {
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

/*
	/GET - read
	read member group
*/
export const readMemberGroup = async (request: Request, response: Response) => {
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

/*
	/GET - read
	read member qualification
*/
// TODO
export const readMemberqualifications = async (request: Request, response: Response) => {
	const memberqualifications = await getRepository(Memberqualifications).createQueryBuilder().getMany()
	response.status(200).json(memberqualifications)
}

export const readMemberqualification = async (request: Request, response: Response) => {
	const memberqualificationId = request.params.id
	const memberqualification = await Memberqualifications.find({
		where: {
			id: memberqualificationId,
		},
	})
	response.status(200).json(memberqualification)
}

/*
	/GET - read
	read member inventoryitems
*/
export const readMemberinventoryitem = async (request: Request, response: Response) => {
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

/*
	/GET - read
	read positions
*/
export const readPositions = async (request: Request, response: Response) => {
	const positions = await getRepository(Positions).createQueryBuilder().getMany()
	response.status(200).json(positions)
}

/*
	/GET - read
	read position by id
*/
export const readPostion = async (request: Request, response: Response) => {
	const positionsId = request.params.id
	const position = await Positions.find({
		where: {
			id: positionsId,
		},
	})
	response.status(200).json(position)
}

/*
	/GET - read
	read statuses
*/
export const readStatuses = async (request: Request, response: Response) => {
	const statuses = await getRepository(Statuses).createQueryBuilder().getMany()
	response.status(200).json(statuses)
}

/*
	/GET - read
	read statuses by id
*/
export const readStatus = async (request: Request, response: Response) => {
	const statusesId = request.params.id
	const status = await Statuses.find({
		where: {
			id: statusesId,
		},
	})
	response.status(200).json(status)
}

/*
	/GET - read
	read qualifications
*/
export const readQualifications = async (request: Request, response: Response) => {
	const qualifications = await getRepository(Qualifications).createQueryBuilder().getMany()
	response.status(200).json(qualifications)
}

/*
	/GET - read
	read qualification by id
*/
export const readQualification = async (request: Request, response: Response) => {
	const qualificationsId = request.params.id
	const qualification = await Qualifications.find({
		where: {
			id: qualificationsId,
		},
	})
	response.status(200).json(qualification)
}

/*
	/GET - read
	read member groups
*/
export const readMembergroups = async (request: Request, response: Response) => {
	const membergroups = await getRepository(Membergroups).createQueryBuilder().getMany()
	response.status(200).json(membergroups)
}

/*
	/GET - read
	read member group by id
*/
export const readMembergroup = async (request: Request, response: Response) => {
	const membergroupsId = request.params.id
	const membergroup = await Membergroups.find({
		where: {
			id: membergroupsId,
		},
	})
	response.status(200).json(membergroup)
}
