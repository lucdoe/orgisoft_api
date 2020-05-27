import members from '../src/routers/router.members'
import request from 'supertest'
import { createConnection } from 'typeorm'

describe('Testing app ', () => {
	it('test DB connection object', async () => {
		const connection = await createConnection()
		expect(connection).toEqual(expect.any(Object))
	})
	it('/GET should response 200', async () => {
		const response = await request(members).get('/1')
		expect(response.status).toBe(200)
	})
	it('/GET should response 404', async () => {
		const response = await request(members).get('/dhsgklhjfg')
		expect(response.status).toBe(404)
	})
})
