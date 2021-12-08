import express from 'express'
import app from './app'

// for vercel serverless functions
export default express().use('/api', app)
