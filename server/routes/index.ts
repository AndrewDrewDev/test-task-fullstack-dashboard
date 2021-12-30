import Router from 'express'
import getDataController from "../controllers/getDataController";
import getErrorLastThreeDayController from "../controllers/getErrorLastThreeDayController";
import getErrorYesterdayController from "../controllers/getErrorYesterdayController";
import getErrorLastHourController from "../controllers/getErrorLastHourController";

const router = Router()

router.get('/data', getDataController)
router.get('/errors/last_3_day', getErrorLastThreeDayController)
router.get('/errors/errors_yesterday',getErrorYesterdayController)
router.get('/errors/errors_last_hour', getErrorLastHourController)

export default router