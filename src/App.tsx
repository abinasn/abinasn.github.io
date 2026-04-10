import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/theme'
import HomePage from './pages/home'

const router = createHashRouter([
  { path: '/', element: <HomePage /> },
  { path: '*', element: <Navigate to="/" replace /> },
])

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
