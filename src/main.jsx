import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import routers from './router/router.jsx'
import AuthContext from './authContext/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthContext>
     <RouterProvider router={routers} />
     <Toaster />
  </AuthContext>
  </StrictMode>,
)
