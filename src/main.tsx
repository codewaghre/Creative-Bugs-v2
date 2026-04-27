import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/themeProvider.tsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <ThemeProvider>
        <Toaster position="bottom-center"
          reverseOrder={false} />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
