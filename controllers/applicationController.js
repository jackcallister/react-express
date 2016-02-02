import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Index from '../assets/javascripts/components/Index'
import Show from '../assets/javascripts/components/Show'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('application/index', {
    index: renderToString(<Index />)
  })
})

router.get('/show', (req, res, next) => {
  res.render('application/show', {
    show: renderToString(<Show />)
  })
})


export default router
