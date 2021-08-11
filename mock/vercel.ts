import express from 'express'
import mock from '../mock'

export default express().use('/api', mock)
