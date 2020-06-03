import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Memberqualifications } from '../models/member/model.Memberqualification'
import { Members } from '../models/member/model.Member'
import { Positions } from '../models/member/model.Position'
import { Statuses } from '../models/member/model.Status'
import { Qualifications } from '../models/member/model.Qualification'
import { Membergroups } from '../models/member/model.Membergroup'

export const deleteMember = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const manager = getManager()
	await manager.delete(Members, memberId)
	res.status(200).json(`Succesfully deleted Member.`)
}

export const deleteMemberAddress = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const manager = getManager()
	const deleteMemberAddress = {
		addresses: undefined,
	}
	await manager.update(Members, memberId, deleteMemberAddress)
	res.status(200).json(`Succesfully deleted Members Address.`)
}

export const deleteMemberPosition = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const manager = getManager()
	const deleteMemberPosition = {
		positions: undefined,
	}
	await manager.update(Members, memberId, deleteMemberPosition)
	res.status(200).json(`Succesfully deleted Members Position.`)
}

export const deleteMemberStatus = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const manager = getManager()
	const deleteMemberStatus = {
		statuses: undefined,
	}
	await manager.update(Members, memberId, deleteMemberStatus)
	res.status(200).json(`Succesfully deleted Members Status.`)
}

export const deleteMemberMembergroup = async (req: Request, res: Response) => {
	const memberId = req.params.id
	const manager = getManager()
	const deleteMemberMembergroup = {
		membergroups: undefined,
	}
	await manager.update(Members, memberId, deleteMemberMembergroup)
	res.status(200).json(`Succesfully deleted Members Membergroup.`)
}

export const deleteMemberqualification = async (req: Request, res: Response) => {
	const manager = getManager()
	const memberQualificationId = req.params.id
	await manager.delete(Memberqualifications, memberQualificationId)
	res.status(200).json(`Succesfully deleted Memberqualification.`)
}

export const deletePosition = async (req: Request, res: Response) => {
	const manager = getManager()
	const memberPositionId = req.params.id
	await manager.delete(Positions, memberPositionId)
	res.status(200).json(`Succesfully deleted Position.`)
}

export const deleteStatus = async (req: Request, res: Response) => {
	const manager = getManager()
	const memberStatusId = req.params.id
	await manager.delete(Statuses, memberStatusId)
	res.status(200).json(`Succesfully deleted Status.`)
}

export const deleteQualification = async (req: Request, res: Response) => {
	const manager = getManager()
	const qualificationId = req.params.id
	await manager.delete(Qualifications, qualificationId)
	res.status(200).json(`Succesfully deleted Qualification.`)
}

export const deleteMembergroup = async (req: Request, res: Response) => {
	const manager = getManager()
	const memberMembergroupId = req.params.id
	await manager.delete(Membergroups, memberMembergroupId)
	res.status(200).json(`Succesfully deleted Membergroup.`)
}
