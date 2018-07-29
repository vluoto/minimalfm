const express = require('express')
const proxy = require('http-proxy-middleware')

const { MINIMALFM_API_URL, PORT } = process.env

const app = express()

app.use(express.static(`${__dirname}/dist/`))
app.use('/api', proxy({ target: MINIMALFM_API_URL, changeOrigin: true }))
app.get(/.*/, (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
