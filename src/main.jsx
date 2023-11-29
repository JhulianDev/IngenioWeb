import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import './assets/styles/Normalize.css'
import './assets/fonts/Fonts.css'
import { CurrencyProvider } from './contexts/CurrencyContext'
import { PacksProvider } from './contexts/PacksContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CurrencyProvider>
    <PacksProvider>
      <RouterProvider router={Router} />
    </PacksProvider>
  </CurrencyProvider>
)
