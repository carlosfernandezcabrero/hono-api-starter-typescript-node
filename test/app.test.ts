import app from '../src/app'

describe('app', () => {
  it('responds with a not found message', async () => {
    const req = await app.request('/what-is-this-even')

    expect(req.status).toBe(404)
    expect(req.headers.get('content-type')).toBe(
      'application/json; charset=UTF-8'
    )
  })
})

describe('GET /v1', () => {
  it('responds with a json message', async () => {
    const req = await app.request('/v1')
    const res = await req.json()

    expect(req.status).toBe(200)
    expect(req.headers.get('content-type')).toBe(
      'application/json; charset=UTF-8'
    )
    expect(res).toEqual({
      message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
    })
  })
})
