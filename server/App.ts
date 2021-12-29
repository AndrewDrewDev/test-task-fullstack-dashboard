import express from 'express'

const PORT = process.env.PORT || '3000'
const app = express()

app.use()

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()