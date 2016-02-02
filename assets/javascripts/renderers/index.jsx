import React from 'react'
import { render } from 'react-dom'

import Index from '../components/Index'

document.addEventListener('DOMContentLoaded', () => {
  render(<Index />, document.getElementById('index'))
})
