import request = require('supertest')
import app from '../src/app'

describe('GET /currency', () => {
	it('should return 200 OK', (done) => {
		request(app).get('/currency').expect(200, done)
	})
})
