import { Router } from 'express'

const router = Router()

router.get('/me', (req, res) => {
  res.status(404).send({ message: 'Not Found' })
  // res.send(req.user)
})

export default router
