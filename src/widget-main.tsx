import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { WidgetPage } from './components/WidgetPage'

createRoot(document.getElementById('widget-root')!).render(
  <StrictMode>
    <WidgetPage />
  </StrictMode>,
)
