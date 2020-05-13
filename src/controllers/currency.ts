import { Request, Response } from 'express'
import { Currency } from '../models/Finance/Currency'

export const insertCurrency = async (req: Request, res: Response) => {
	const currency = new Currency()
	currency.currency = req.body.currency
	currency.exchangeRate = req.body.exchangeRate
	currency.currencyCode = req.body.currencyCode
	await currency.save()
	res.status(200)
}

export const findCurrencys = async (req: Request, res: Response) => {
	const allCurrencys = await Currency.find()
	res.status(200).json(allCurrencys)
}

export const findCurrencyById = async (req: Request, res: Response) => {
	const currency = await Currency.findOne(req.params.id)
	res.status(200).json(currency)
}
