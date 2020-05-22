import { Response, Request } from 'express'

export const mest = async (req: Request, res: Response) => {
	const datensparkasse = { data: 'fake bank data' }
	res.json(datensparkasse)
}
