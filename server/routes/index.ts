import Router from 'express'
import getDataController from "../controllers/getDataController";

const router = Router()

router.get('/data', getDataController)

export default router