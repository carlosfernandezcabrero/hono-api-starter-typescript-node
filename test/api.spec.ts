import app from '../src/app'

describe('GET /v1/api', () => {
  it('responds with a json message', async () => {
    const request = await app.request('/v1/api')
    const response = await request.json()

    expect(request.status).toBe(200)
    expect(request.headers.get('content-type')).toBe(
      'application/json; charset=UTF-8'
    )
    expect(response).toEqual({
      message: 'API - 👋🌎🌍🌏'
    })
  })
})

describe('GET /v1/api/emojis', () => {
  it('responds with a json message', async () => {
    const request = await app.request('/v1/api/emojis')
    const response = await request.json()

    expect(request.status).toBe(200)
    expect(request.headers.get('content-type')).toBe(
      'application/json; charset=UTF-8'
    )
    expect(response).toEqual(['😀', '😳', '🙄'])
  })
})
