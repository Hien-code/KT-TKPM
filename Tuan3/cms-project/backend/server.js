const express = require('express')
const cors = require('cors')

const postRoutes = require('./routes/postRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Backend CMS running 🚀')
})

app.use('/posts', postRoutes)

app.listen(5001, () => {
  console.log('Server running at http://localhost:5001')
})
