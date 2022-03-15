import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...' + '123152142')
})

const test = 'sdadwkokdqwd'

const PORT = process.env.PORT || 5000

const serverRunningMessage = `server running in ${process.env.NODE_ENV} on port${PORT}`

app.listen(PORT, () => {
  console.log(serverRunningMessage)
})
