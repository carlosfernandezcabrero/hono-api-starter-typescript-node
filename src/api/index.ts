import { Hono } from 'hono'
import emojis from './emojis'

const router = new Hono()

router.get('/', ({ json }) =>
  json({
    message: 'API - 👋🌎🌍🌏'
  })
)

router.route('/emojis', emojis)

export default router
