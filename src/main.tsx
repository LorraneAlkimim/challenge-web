import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/global.scss'
import * as Toast from '@radix-ui/react-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Toast.Provider duration={3000}>
        <App />

        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
