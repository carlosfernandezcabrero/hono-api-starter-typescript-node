import { serve } from '@hono/node-server'
import app from './app'

serve(app, ({ port }: { port: number }) => {
  console.log(`Server is running on http://localhost:${port}`)
})
