import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { FavoriteProvider } from './context/favorite-provider/favorite-provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </StrictMode>,
)
