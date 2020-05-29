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
export const readMembers = async (req: Request, res: Response) => {
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
	res.status(200).json(allMembers)
}

/*
	/GET - read
	read member
*/
export const readMember = async (req: Request, res: Response) => {
	const membersId = req.params.id
	const member = await Members.find({
		relations: ['addresses', 'addresses.citys', 'positions', 'statuses', 'membergroups', 'inventoryitems'],
		where: {
			id: membersId,
		},
	})
	res.status(200).json(member)
}

/*
	/GET - read
	read member address
*/
export const readMemberAddress = async (req: Request, res: Response) => {
	const membersId = req.params.id
	const address = await Members.find({
		select: ['id'],
		relations: ['addresses', 'addresses.citys'],
		where: {
			id: membersId,
		},
	})
	res.status(200).json(address)
}

/*
	/GET - read
	read member position
*/
export const readMemberPosition = async (req: Request, res: Response) => {
	const membersId = req.params.id
	const position = await Members.find({
		select: ['id'],
		relations: ['positions'],
		where: {
			id: membersId,
		},
	})
	res.status(200).json(position)
}

/*
	/GET - read
	read member status
*/
export const readMemberStatus = async (req: Request, res: Response) => {
	const membersId = req.params.id
	const status = await Members.find({
		select: ['id'],
		relations: ['statuses'],
		where: {
			id: membersId,
		},
	})
	res.status(200).json(status)
}

/*
	/GET - read
	read member group
*/
export const readMemberGroup = async (req: Request, res: Response) => {
	const membersId = req.params.id
	const group = await Members.find({
		select: ['id'],
		relations: ['membergroups'],
		where: {
			id: membersId,
		},
	})
	res.status(200).json(group)
}

/*
	/GET - read
	read member qualification
*/
// TODO
export const readMemberQualification = async (req: Request, res: Response) => {
	const qualifications = await getRepository(Qualifications).createQueryBuilder().getMany()
	res.status(200).json(qualifications)
}

/*
	/GET - read
	read member inventoryitems
*/
export const readMemberinventoryitem = async (req: Request, res: Response) => {
	const membersId = req.params.id
	const items = await Members.find({
		select: ['id'],
		relations: ['inventoryitems'],
		where: {
			id: membersId,
		},
	})
	res.status(200).json(items)
}

/*
	/GET - read
	read positions
*/
export const readPositions = async (req: Request, res: Response) => {
	const positions = await getRepository(Positions).createQueryBuilder().getMany()
	res.status(200).json(positions)
}

/*
	/GET - read
	read position by id
*/
export const readPostion = async (req: Request, res: Response) => {
	const positionsId = req.params.id
	const position = await Positions.find({
		where: {
			id: positionsId,
		},
	})
	res.status(200).json(position)
}

/*
	/GET - read
	read statuses
*/
export const readStatuses = async (req: Request, res: Response) => {
	const statuses = await getRepository(Statuses).createQueryBuilder().getMany()
	res.status(200).json(statuses)
}

/*
	/GET - read
	read statuses by id
*/
export const readStatus = async (req: Request, res: Response) => {
	const statusesId = req.params.id
	const status = await Statuses.find({
		where: {
			id: statusesId,
		},
	})
	res.status(200).json(status)
}

/*
	/GET - read
	read qualifications
*/
export const readQualifications = async (req: Request, res: Response) => {
	const qualifications = await getRepository(Qualifications).createQueryBuilder().getMany()
	res.status(200).json(qualifications)
}

/*
	/GET - read
	read qualification by id
*/
export const readQualification = async (req: Request, res: Response) => {
	const qualificationsId = req.params.id
	const qualification = await Statuses.find({
		where: {
			id: qualificationsId,
		},
	})
	res.status(200).json(qualification)
}

/*
	/GET - read
	read member groups
*/
export const readMembergroups = async (req: Request, res: Response) => {
	const membergroups = await getRepository(Membergroups).createQueryBuilder().getMany()
	res.status(200).json(membergroups)
}

/*
	/GET - read
	read member group by id
*/
export const readMembergroup = async (req: Request, res: Response) => {
	const membergroupsId = req.params.id
	const membergroup = await Membergroups.find({
		where: {
			id: membergroupsId,
		},
	})
	res.status(200).json(membergroup)
}
