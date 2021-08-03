import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('users')
})

export default router
