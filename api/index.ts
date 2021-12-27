/**
 * Standalone Express Application
 * for vercel serverless functions
 */

import express from 'express'
import mock from '../mock'

export default express().use('/api', mock)
