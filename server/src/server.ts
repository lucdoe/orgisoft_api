import { Request, Response, NextFunction } from 'express'
import app from './app'

// not found handler
app.use((request: Request, response: Response, next: NextFunction) => {
	response.status(404).json('Not found. (4XX)')
})

// error handler
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	console.error(err.stack)
	response.status(500).json('Internal Server error. (5XX)')
})

const server = app.listen(app.get('port'), () => {
	console.log('  App is running at http://localhost:%d in %s mode.', app.get('port'), app.get('env'))
	console.log('  Press CTRL-C to stop the server.\n')
})

export default server
