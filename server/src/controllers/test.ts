import { Response, Request } from 'express'

export const test = async (req: Request, res: Response) => {
	const datensparkasse = { data: 'fake bank data' }
	res.json(datensparkasse)
}
