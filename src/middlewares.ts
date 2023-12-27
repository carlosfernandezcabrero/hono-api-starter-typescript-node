import { Context } from 'hono'

function notFound({ json, req }: Context): Response {
  return json(new Error(`🔍 - Not Found - ${req.path}`), 404)
}

export default { notFound }
