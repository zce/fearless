/**
 * Root Express Application
 * for vercel serverless functions
 */

import express from 'express'
import app from './app'

export default express().use('/api', app)
