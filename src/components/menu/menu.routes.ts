import express from 'express'
import * as menuController from './menu.controller'
import jwtCheck from '../../middleware/auth'

const router = express.Router()

router.get('/', menuController.index)
router.post('/', menuController.create)
router.delete('/:id', menuController.destroy)

router.get(
  '/protected',
  jwtCheck,
  (req: express.Request, res: express.Response) => {
    console.log('hit protected route')
    res.json({ key: 'value' })
  }
)

router.get('/:id', menuController.show)
export default router
