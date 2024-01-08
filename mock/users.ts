import { Router } from 'express'

const router: Router = Router()

router.get('/me', (req, res) => {
  res.send(req.user)
})

export default router
