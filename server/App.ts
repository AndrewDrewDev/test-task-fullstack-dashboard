import express from 'express'
import router from "./routes";
import errorResponseHandler from "./error/errorResponseHandler";

const PORT = process.env.PORT || '3000'
const app = express()

app.use('/api', router)

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

app.use(errorResponseHandler)

start()