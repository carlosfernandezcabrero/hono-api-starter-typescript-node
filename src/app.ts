import { Hono } from 'hono'
import { compress } from 'hono/compress'
import { logger } from 'hono/logger'
import { poweredBy } from 'hono/powered-by'
import { secureHeaders } from 'hono/secure-headers'
import api from './api'
import { customLogger } from './logger'
import middlewares from './middlewares'

const app = new Hono().basePath('/v1')

app.use('*', compress())
if (process.env.NODE_ENV !== 'test') {
  app.use('*', logger(customLogger))
}
app.use('*', secureHeaders())
app.use('*', poweredBy())

app.get('/', (c) =>
  c.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  })
)

app.route('/api', api)

app.notFound(middlewares.notFound)

export default app
