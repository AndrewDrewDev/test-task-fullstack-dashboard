import express from 'express'
import router from "./routes";
import errorResponseHandler from "./error/errorResponseHandler";
import pageNotFoundMiddleware from "./middleware/pageNotFoundMiddleware";

const PORT = process.env.PORT || '8080'
const app = express()

app.use('/api', router)
// Handle wrong route 404
app.get('*', pageNotFoundMiddleware)

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

// Catch errors
app.use(errorResponseHandler)

start()