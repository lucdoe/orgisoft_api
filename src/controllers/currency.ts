import { Request, Response } from 'express'
import { Currencys } from '../models/Currencys'
import { createConnection } from 'typeorm'

export const index = (req: Request, res: Response) => {
	// orm/db connection
	createConnection()
		.then(async (connection) => {
			console.log('Inserting a new currency into the database...')
			const currencys = new Currencys()
			currencys.currency = 'TEST'
			currencys.exchange_rate = 5.32
			currencys.currency_code = 'TST'
			await connection.manager.save(currencys)
			console.log('Saved a new currencys with id: ' + currencys.currency_id)

			console.log('Loading currencys from the database...')
			const currencysDb = await connection.manager.find(Currencys)
			res.json(currencysDb)
		})
		.catch((error) => console.log(error))
}
