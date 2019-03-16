const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare().then(() => {
  const server = express()
  //api purpose express
  const api = require('../api/app')
  server.use('/api',api)
  //complex routes for front end

  // server.get('/b', (req, res) => {
  //   return app.render(req, res, '/b', req.query)
  // })

  // server.get('/hello/:id', (req, res) => {
  //   return app.render(req, res, '/posts', { id: req.params.id })
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
