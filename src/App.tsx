import { createHashRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/theme'
import HomePage from './pages/home'

const router = createHashRouter([
  { path: '/', element: <HomePage /> },
])

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
