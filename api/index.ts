import { getRequestListener } from '@hono/node-server'
import app from '../src/server'

export default getRequestListener(app.fetch)
