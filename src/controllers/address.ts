import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import { Address } from '../models/Members/Address'
import { City } from '../models/City'

export const findAddressById = async (req: Request, res: Response) => {
	const address = await getConnection()
		.getRepository(Address)
		.createQueryBuilder('address')
		.where(`address.id = ${req.params.id}`)
		.leftJoinAndSelect('address.city', 'city')
		.getMany()
	res.status(200).json(address)
}
