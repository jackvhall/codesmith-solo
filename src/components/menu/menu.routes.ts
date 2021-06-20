import express from 'express'
import * as menuController from './menu.controller'
import jwtCheck from '../../middleware/auth'

const router = express.Router()

router.get('/', menuController.index)
router.post('/', menuController.create)
router.get('/:id', menuController.show)
router.delete('/:id', menuController.destroy)

router.use(jwtCheck)

router.get('/protected', (req: express.Request, res: express.Response) => {
  res.json({ key: 'value' })
})

export default router
