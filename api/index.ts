import express from 'express'
import mock from '../mock'

// for vercel serverless functions
export default express().use('/api', mock)
