import { Request, Response } from 'express'
import { Currency } from '../models/Currency'

export const insertCurrency = async (req: Request, res: Response) => {
	const currency = new Currency()
	currency.currency = req.body.currency
	currency.exchange_rate = req.body.exchangeRate
	currency.currency_code = req.body.currencyCode
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
