const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const chefRouter = require('./router/chefRouter')

app.use(cors())

// Using the router;
app.use('/chefs',chefRouter)

app.get('/', (req, res) => {
  res.send('Chefs Palette server is successfully running...')
})

app.listen(port, () => {
  console.log(`Chef's Palette successfully running at PORT Number ${port}`)
})