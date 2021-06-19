import express from 'express'
import * as resourceController from './resource.controller'
import jwtCheck from '../../middleware/auth'

const router = express.Router()

router.get('/', resourceController.index)
router.post('/', resourceController.create)
router.get('/:id', resourceController.show)
router.delete('/:id', resourceController.destroy)

router.use(jwtCheck)

router.get('/protected', (req: express.Request, res: express.Response) => {
  res.json({ key: 'value' })
})

export default router
