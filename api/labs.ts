import { Router } from 'express'

const router = Router()

router.get('/status/:status', (req, res) => {
  res.status(~~req.params.status || 404).send({ message: 'error' })
})

export default router
