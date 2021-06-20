import express from 'express'
import * as pageController from './page.controller'
import jwtCheck from '../../middleware/auth'

const router = express.Router()

router.get('/', pageController.index)
router.post('/', pageController.create)
router.get('/:id', pageController.show)
router.delete('/:id', pageController.destroy)

router.use(jwtCheck)

router.get('/protected', (req: express.Request, res: express.Response) => {
  res.json({ key: 'value' })
})

export default router
