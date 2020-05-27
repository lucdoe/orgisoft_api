import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Memberqualification } from '../../models/Members/Memberqualification'
import { Members } from '../../models/Members/Members'
import { Position } from '../../models/Members/Position'
import { Status } from '../../models/Members/Status'
import { Qualification } from '../../models/Members/Qualification'
import { Membergroup } from '../../models/Members/Membergroup'

/*
	/GET - read
	read all members
*/
export const readMembers = async (req: Request, res: Response) => {
	const allMembers = await Memberqualification.find({
		relations: [
			'qualification',
			'members',
			'members.address',
			'members.address.city',
			'members.position',
			'members.status',
			'members.membergroup',
		],
	})
	res.status(200).json(allMembers)
}

/*
	/GET - read
	read member
*/
export const readMember = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const member = await Members.find({
		relations: ['address', 'address.city', 'position', 'status', 'membergroup', 'inventoryitems'],
		where: {
			id: memberId,
		},
	})
	res.status(200).json(member)
}

/*
	/GET - read
	read member address
*/
export const readMemberAddress = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const address = await Members.find({
		select: ['id'],
		relations: ['address', 'address.city'],
		where: {
			id: memberId,
		},
	})
	res.status(200).json(address)
}

/*
	/GET - read
	read member position
*/
export const readMemberPosition = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const position = await Members.find({
		select: ['id'],
		relations: ['position'],
		where: {
			id: memberId,
		},
	})
	res.status(200).json(position)
}

/*
	/GET - read
	read member status
*/
export const readMemberStatus = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const status = await Members.find({
		select: ['id'],
		relations: ['status'],
		where: {
			id: memberId,
		},
	})
	res.status(200).json(status)
}

/*
	/GET - read
	read member group
*/
export const readMemberGroup = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const group = await Members.find({
		select: ['id'],
		relations: ['membergroup'],
		where: {
			id: memberId,
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
	const qualifications = await getRepository(Qualification).createQueryBuilder().getMany()
	res.status(200).json(qualifications)
}

/*
	/GET - read
	read member inventoryitems
*/
export const readMemberinventoryitem = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const items = await Members.find({
		select: ['id'],
		relations: ['inventoryitems'],
		where: {
			id: memberId,
		},
	})
	res.status(200).json(items)
}

/*
	/GET - read
	read positions
*/
export const readPositions = async (req: Request, res: Response) => {
	const positions = await getRepository(Position).createQueryBuilder().getMany()
	res.status(200).json(positions)
}

/*
	/GET - read
	read position by id
*/
export const readPostion = async (req: Request, res: Response) => {
	const positionId = req.params.id
	const position = await Position.find({
		where: {
			id: positionId,
		},
	})
	res.status(200).json(position)
}

/*
	/GET - read
	read statuses
*/
export const readStatuses = async (req: Request, res: Response) => {
	const statuses = await getRepository(Status).createQueryBuilder().getMany()
	res.status(200).json(statuses)
}

/*
	/GET - read
	read statuses by id
*/
export const readStatus = async (req: Request, res: Response) => {
	const statusId = req.params.id
	const status = await Status.find({
		where: {
			id: statusId,
		},
	})
	res.status(200).json(status)
}

/*
	/GET - read
	read qualifications
*/
export const readQualifications = async (req: Request, res: Response) => {
	const qualifications = await getRepository(Qualification).createQueryBuilder().getMany()
	res.status(200).json(qualifications)
}

/*
	/GET - read
	read qualification by id
*/
export const readQualification = async (req: Request, res: Response) => {
	const qualificationId = req.params.id
	const qualification = await Status.find({
		where: {
			id: qualificationId,
		},
	})
	res.status(200).json(qualification)
}

/*
	/GET - read
	read member groups
*/
export const readMembergroups = async (req: Request, res: Response) => {
	const membergroups = await getRepository(Membergroup).createQueryBuilder().getMany()
	res.status(200).json(membergroups)
}

/*
	/GET - read
	read member group by id
*/
export const readMembergroup = async (req: Request, res: Response) => {
	const membergroupId = req.params.id
	const membergroup = await Membergroup.find({
		where: {
			id: membergroupId,
		},
	})
	res.status(200).json(membergroup)
}
