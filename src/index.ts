import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello, work deploy auto!')
})

export default app
