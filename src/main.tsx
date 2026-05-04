import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";

import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <HelmetProvider>
      <BrowserRouter>

        <Toaster position="bottom-center"
          reverseOrder={false} />
        <App />

      </BrowserRouter>
    </HelmetProvider>

  </StrictMode>,
)
