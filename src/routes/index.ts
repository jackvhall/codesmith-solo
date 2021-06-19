import express, { Response, Request } from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', function (req: Request, res: Response) {
  res.json({ title: 'Express' })
})

router.get('/callback', function (req: Request, res: Response) {
  res.json({ title: 'Express' })
})

export default router
