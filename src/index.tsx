import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import '@/assets/scss/main.scss'
import ThemeSwitch from '@/components/Theme/ThemeSwitch'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ThemeSwitch />
    </BrowserRouter>
  </React.StrictMode>
)
